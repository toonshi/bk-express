import { NextRequest, NextResponse } from "next/server";
import { geocodeAddress, calculateRoute, calculatePrice } from "@/lib/distance";

export async function POST(req: NextRequest) {
  let body: { pickup?: string; dropoff?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { pickup, dropoff } = body;
  if (!pickup?.trim() || !dropoff?.trim()) {
    return NextResponse.json(
      { error: "Please enter both pickup and drop-off locations." },
      { status: 422 }
    );
  }

  try {
    const [origin, destination] = await Promise.all([
      geocodeAddress(pickup),
      geocodeAddress(dropoff),
    ]);
    const route = await calculateRoute(origin.coordinates, destination.coordinates);
    const price = calculatePrice(route.distanceKm);
    return NextResponse.json({ ...route, price });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Could not calculate route." },
      { status: 422 }
    );
  }
}
