export interface Coordinates {
  lat: number;
  lng: number;
}

export interface GeocodingResult {
  coordinates: Coordinates;
  displayName: string;
}

export interface RouteResult {
  distanceKm: number;
  durationMinutes: number;
}

export async function geocodeAddress(
  address: string
): Promise<GeocodingResult> {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    address
  )}&format=json&limit=1`;

  const res = await fetch(url, {
    headers: {
      "User-Agent": "BKExpress/1.0 (https://thebananaking.com)",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to geocode address");
  }

  const data = await res.json();

  if (!data || data.length === 0) {
    throw new Error(`Could not find location: "${address}"`);
  }

  return {
    coordinates: {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon),
    },
    displayName: data[0].display_name,
  };
}

export async function calculateRoute(
  origin: Coordinates,
  destination: Coordinates
): Promise<RouteResult> {
  const url = `https://routing.openstreetmap.de/routed-car/route/v1/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?overview=false`;

  const res = await fetch(url, {
    headers: {
      "User-Agent": "BKExpress/1.0 (https://thebananaking.com)",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to calculate route");
  }

  const data = await res.json();

  if (data.code !== "Ok" || !data.routes?.length) {
    throw new Error("No route found between these locations");
  }

  const route = data.routes[0];
  return {
    distanceKm: route.distance / 1000,
    durationMinutes: Math.round(route.duration / 60),
  };
}

export const PRICING = {
  baseFee: 50, // KES
  ratePerKm: 25, // KES per km
  minimumFare: 150, // KES
  currency: "KES",
} as const;

export function calculatePrice(distanceKm: number): number {
  const calculated = PRICING.baseFee + distanceKm * PRICING.ratePerKm;
  return Math.max(calculated, PRICING.minimumFare);
}

export function estimateDropoffTime(
  pickupDate: Date,
  durationMinutes: number
): Date {
  const BUFFER_MINUTES = 30;
  const totalMinutes = durationMinutes + BUFFER_MINUTES;
  return new Date(pickupDate.getTime() + totalMinutes * 60 * 1000);
}
