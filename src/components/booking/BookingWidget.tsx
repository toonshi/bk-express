"use client";

import { useState } from "react";
import { MapPin, ArrowRight, SpinnerGap } from "@phosphor-icons/react/ssr";
import {
  geocodeAddress,
  calculateRoute,
  calculatePrice,
} from "@/lib/distance";
import BookingModal from "./BookingModal";

export default function BookingWidget() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [routeData, setRouteData] = useState<{
    distanceKm: number;
    durationMinutes: number;
    price: number;
  } | null>(null);

  const handleSeePrice = async () => {
    if (!pickup.trim() || !dropoff.trim()) {
      setError("Please enter both pickup and drop-off locations.");
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const [originResult, destResult] = await Promise.all([
        geocodeAddress(pickup),
        geocodeAddress(dropoff),
      ]);

      const route = await calculateRoute(
        originResult.coordinates,
        destResult.coordinates
      );

      const price = calculatePrice(route.distanceKm);

      setRouteData({
        distanceKm: route.distanceKm,
        durationMinutes: route.durationMinutes,
        price,
      });
      setModalOpen(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not calculate route. Please check the addresses and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        id="booking"
        className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2 w-full max-w-2xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row gap-2">
          {/* Pickup */}
          <div className="flex items-center gap-3 flex-1 px-4 py-3 rounded-xl bg-[#F6F6F6] focus-within:ring-2 focus-within:ring-[#B9FF66] transition-shadow">
            <div className="w-6 h-6 rounded-full bg-[#B9FF66] flex items-center justify-center flex-shrink-0">
              <MapPin size={12} className="text-[#1A1C22]" />
            </div>
            <input
              type="text"
              placeholder="Pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSeePrice()}
              className="flex-1 bg-transparent text-sm text-[#1A1C22] placeholder-gray-400 outline-none font-medium"
            />
          </div>

          {/* Arrow divider */}
          <div className="hidden sm:flex items-center justify-center text-gray-300">
            <ArrowRight size={16} />
          </div>

          {/* Drop-off */}
          <div className="flex items-center gap-3 flex-1 px-4 py-3 rounded-xl bg-[#F6F6F6] focus-within:ring-2 focus-within:ring-[#B9FF66] transition-shadow">
            <div className="w-6 h-6 rounded-full bg-[#1A1C22] flex items-center justify-center flex-shrink-0">
              <MapPin size={12} className="text-[#B9FF66]" />
            </div>
            <input
              type="text"
              placeholder="Drop-off location"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSeePrice()}
              className="flex-1 bg-transparent text-sm text-[#1A1C22] placeholder-gray-400 outline-none font-medium"
            />
          </div>

          {/* CTA button */}
          <button
            onClick={handleSeePrice}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#B9FF66] text-[#1A1C22] rounded-xl font-bold text-sm hover:bg-[#a8ef55] transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {loading ? (
              <>
                <SpinnerGap size={16} className="animate-spin" />
                Calculating…
              </>
            ) : (
              "See Price →"
            )}
          </button>
        </div>

        {error && (
          <p className="mt-3 px-2 text-xs text-red-500 font-medium">{error}</p>
        )}
      </div>

      {routeData && (
        <BookingModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          pickup={pickup}
          dropoff={dropoff}
          distanceKm={routeData.distanceKm}
          durationMinutes={routeData.durationMinutes}
          price={routeData.price}
        />
      )}
    </>
  );
}
