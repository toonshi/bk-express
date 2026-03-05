import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { PRICING } from "@/lib/distance";

export interface BookingPayload {
  // Customer
  name: string;
  phone: string;
  email: string;
  // Route
  pickup: string;
  dropoff: string;
  distanceKm: number;
  durationMinutes: number;
  price: number;
  // Schedule
  pickupDate: string; // ISO string
  pickupTime: string; // "HH:MM"
  estimatedDropoff: string; // ISO string
}

function generateRef(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let ref = "BKX-";
  for (let i = 0; i < 6; i++) {
    ref += chars[Math.floor(Math.random() * chars.length)];
  }
  return ref;
}

function validate(body: Partial<BookingPayload>): string | null {
  if (!body.name?.trim()) return "Name is required.";
  if (!body.phone?.trim()) return "Phone number is required.";
  if (!body.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
    return "A valid email address is required.";
  if (!body.pickup?.trim()) return "Pickup location is required.";
  if (!body.dropoff?.trim()) return "Drop-off location is required.";
  if (!body.pickupDate) return "Pickup date is required.";
  if (!body.pickupTime) return "Pickup time is required.";
  if (typeof body.price !== "number" || body.price <= 0)
    return "Invalid price.";
  return null;
}

export async function POST(req: NextRequest) {
  let body: Partial<BookingPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 422 });
  }

  const booking = body as BookingPayload;
  const ref = generateRef();

  const pickupFormatted = new Date(booking.pickupDate).toLocaleDateString(
    "en-KE",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  );
  const dropoffFormatted = new Date(booking.estimatedDropoff).toLocaleString(
    "en-KE",
    { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }
  );

  // Send confirmation email if RESEND_API_KEY is configured
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromAddress =
      process.env.EMAIL_FROM ?? "BK Express <noreply@bkexpress.co.ke>";
    const replyTo =
      process.env.EMAIL_REPLY_TO ?? "hello@bkexpress.co.ke";

    await resend.emails.send({
      from: fromAddress,
      to: booking.email,
      replyTo,
      subject: `Booking Confirmed – ${ref}`,
      html: buildCustomerEmail(booking, ref, pickupFormatted, dropoffFormatted),
    });

    // Also notify ops team
    const opsEmail = process.env.OPS_EMAIL;
    if (opsEmail) {
      await resend.emails.send({
        from: fromAddress,
        to: opsEmail,
        subject: `New Booking – ${ref} – ${booking.name}`,
        html: buildOpsEmail(booking, ref, pickupFormatted, dropoffFormatted),
      });
    }
  }

  return NextResponse.json({ ref }, { status: 201 });
}

function buildCustomerEmail(
  b: BookingPayload,
  ref: string,
  pickupFormatted: string,
  dropoffFormatted: string
): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Booking Confirmed – BK Express</title>
</head>
<body style="margin:0;padding:0;background:#f6f6f6;font-family:'IBM Plex Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f6f6;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:#1A1C22;padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="background:#B9FF66;color:#1A1C22;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:4px 10px;border-radius:6px;">BK</span>
                    <span style="color:#ffffff;font-size:16px;font-weight:700;margin-left:8px;letter-spacing:0.02em;">BK EXPRESS</span>
                  </td>
                  <td align="right">
                    <span style="background:#B9FF66;color:#1A1C22;font-size:12px;font-weight:700;padding:6px 14px;border-radius:8px;">${ref}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h1 style="font-size:26px;font-weight:700;color:#1A1C22;margin:0 0 8px;">Booking Confirmed! 🎉</h1>
              <p style="font-size:15px;color:#6b7280;margin:0 0 32px;">Hi ${b.name}, your delivery has been booked. Here's your summary:</p>

              <!-- Route card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f6f6;border-radius:12px;padding:24px;margin-bottom:24px;">
                <tr>
                  <td>
                    <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:#9ca3af;margin:0 0 4px;">Pickup</p>
                    <p style="font-size:15px;font-weight:600;color:#1A1C22;margin:0 0 16px;">${b.pickup}</p>
                    <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:#9ca3af;margin:0 0 4px;">Drop-off</p>
                    <p style="font-size:15px;font-weight:600;color:#1A1C22;margin:0 0 16px;">${b.dropoff}</p>
                    <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 16px;" />
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="font-size:12px;color:#9ca3af;margin:0 0 2px;">Date</p>
                          <p style="font-size:14px;font-weight:600;color:#1A1C22;margin:0;">${pickupFormatted}</p>
                        </td>
                        <td>
                          <p style="font-size:12px;color:#9ca3af;margin:0 0 2px;">Pickup time</p>
                          <p style="font-size:14px;font-weight:600;color:#1A1C22;margin:0;">${b.pickupTime}</p>
                        </td>
                        <td align="right">
                          <p style="font-size:12px;color:#9ca3af;margin:0 0 2px;">Total</p>
                          <p style="font-size:18px;font-weight:700;color:#1A1C22;margin:0;">${PRICING.currency} ${b.price.toFixed(0)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Est drop-off -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#1A1C22;border-radius:12px;padding:20px;margin-bottom:32px;">
                <tr>
                  <td>
                    <p style="font-size:12px;color:#6b7280;margin:0 0 4px;">Estimated drop-off</p>
                    <p style="font-size:16px;font-weight:700;color:#B9FF66;margin:0;">${dropoffFormatted}</p>
                  </td>
                </tr>
              </table>

              <p style="font-size:14px;color:#6b7280;margin:0 0 24px;">Our driver will contact you at <strong style="color:#1A1C22;">${b.phone}</strong> before arrival. If you need to make changes, reply to this email or call us.</p>

              <a href="tel:+254700000000" style="display:inline-block;padding:14px 28px;background:#B9FF66;color:#1A1C22;font-weight:700;font-size:14px;border-radius:10px;text-decoration:none;">Call +254 700 000 000</a>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;padding:24px 40px;border-top:1px solid #e5e7eb;">
              <p style="font-size:12px;color:#9ca3af;margin:0;text-align:center;">© 2026 BK Express · Nairobi, Kenya · <a href="mailto:hello@bkexpress.co.ke" style="color:#9ca3af;">hello@bkexpress.co.ke</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildOpsEmail(
  b: BookingPayload,
  ref: string,
  pickupFormatted: string,
  dropoffFormatted: string
): string {
  return `
<h2>New Booking: ${ref}</h2>
<p><strong>Customer:</strong> ${b.name} · ${b.phone} · ${b.email}</p>
<p><strong>Route:</strong> ${b.pickup} → ${b.dropoff} (${b.distanceKm.toFixed(1)} km, ~${b.durationMinutes} min)</p>
<p><strong>Date:</strong> ${pickupFormatted} at ${b.pickupTime}</p>
<p><strong>Est. drop-off:</strong> ${dropoffFormatted}</p>
<p><strong>Price:</strong> ${PRICING.currency} ${b.price.toFixed(0)}</p>`;
}
