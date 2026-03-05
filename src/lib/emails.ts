import { PRICING } from "@/lib/distance";
import type { BookingPayload } from "@/app/api/bookings/route";

export function buildCustomerEmail(
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
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'IBM Plex Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:#0f172a;padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="background:#16a34a;color:#ffffff;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:4px 10px;border-radius:6px;">BK</span>
                    <span style="color:#ffffff;font-size:16px;font-weight:700;margin-left:8px;letter-spacing:0.02em;">BK EXPRESS</span>
                  </td>
                  <td align="right">
                    <span style="background:#dcfce7;color:#15803d;font-size:12px;font-weight:700;padding:6px 14px;border-radius:8px;">${ref}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h1 style="font-size:26px;font-weight:700;color:#0f172a;margin:0 0 8px;">Booking Confirmed! 🎉</h1>
              <p style="font-size:15px;color:#64748b;margin:0 0 32px;">Hi ${b.name}, your delivery has been booked. Here's your summary:</p>

              <!-- Route card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;padding:24px;margin-bottom:24px;border:1px solid #e2e8f0;">
                <tr>
                  <td>
                    <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:#94a3b8;margin:0 0 4px;">Pickup</p>
                    <p style="font-size:15px;font-weight:600;color:#0f172a;margin:0 0 16px;">${b.pickup}</p>
                    <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:#94a3b8;margin:0 0 4px;">Drop-off</p>
                    <p style="font-size:15px;font-weight:600;color:#0f172a;margin:0 0 16px;">${b.dropoff}</p>
                    <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 16px;" />
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="font-size:12px;color:#94a3b8;margin:0 0 2px;">Date</p>
                          <p style="font-size:14px;font-weight:600;color:#0f172a;margin:0;">${pickupFormatted}</p>
                        </td>
                        <td>
                          <p style="font-size:12px;color:#94a3b8;margin:0 0 2px;">Pickup time</p>
                          <p style="font-size:14px;font-weight:600;color:#0f172a;margin:0;">${b.pickupTime}</p>
                        </td>
                        <td align="right">
                          <p style="font-size:12px;color:#94a3b8;margin:0 0 2px;">Total</p>
                          <p style="font-size:18px;font-weight:700;color:#16a34a;margin:0;">${PRICING.currency} ${b.price.toFixed(0)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Est drop-off -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;border-radius:12px;padding:20px;margin-bottom:32px;">
                <tr>
                  <td>
                    <p style="font-size:12px;color:#64748b;margin:0 0 4px;">Estimated drop-off</p>
                    <p style="font-size:16px;font-weight:700;color:#4ade80;margin:0;">${dropoffFormatted}</p>
                  </td>
                </tr>
              </table>

              <p style="font-size:14px;color:#64748b;margin:0 0 24px;">Our driver will contact you at <strong style="color:#0f172a;">${b.phone}</strong> before arrival. If you need to make changes, reply to this email or call us.</p>

              <a href="tel:+254700000000" style="display:inline-block;padding:14px 28px;background:#16a34a;color:#ffffff;font-weight:700;font-size:14px;border-radius:10px;text-decoration:none;">Call +254 700 000 000</a>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:24px 40px;border-top:1px solid #e2e8f0;">
              <p style="font-size:12px;color:#94a3b8;margin:0;text-align:center;">© 2026 BK Express · Nairobi, Kenya · <a href="mailto:hello@bkexpress.co.ke" style="color:#94a3b8;">hello@bkexpress.co.ke</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildOpsEmail(
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
