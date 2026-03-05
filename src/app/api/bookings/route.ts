import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { PRICING } from "@/lib/distance";
import { buildCustomerEmail, buildOpsEmail } from "@/lib/emails";

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

