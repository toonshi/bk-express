"use client";

import { useState } from "react";
import { MapPin, ArrowRight, SpinnerGap } from "@phosphor-icons/react/ssr";
import BookingModal from "./BookingModal";

interface QuoteResult {
  distanceKm: number;
  durationMinutes: number;
  price: number;
}

export default function BookingWidget() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quote, setQuote] = useState<QuoteResult | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSeePrice = async () => {
    if (!pickup.trim() || !dropoff.trim()) {
      setError("Please enter both pickup and drop-off locations.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pickup: pickup.trim(), dropoff: dropoff.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not calculate route.");
      setQuote(data as QuoteResult);
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
        className="bg-white rounded-2xl shadow-lg border border-slate-200 p-2 w-full max-w-2xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-3 flex-1 px-4 py-3 rounded-xl bg-slate-50 focus-within:ring-2 focus-within:ring-green-500 transition-shadow">
            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
              <MapPin size={12} className="text-white" />
            </div>
            <input
              type="text"
              placeholder="Pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSeePrice()}
              className="flex-1 bg-transparent text-sm text-slate-900 placeholder-slate-400 outline-none font-medium"
            />
          </div>

          <div className="hidden sm:flex items-center justify-center text-slate-300">
            <ArrowRight size={16} />
          </div>

          <div className="flex items-center gap-3 flex-1 px-4 py-3 rounded-xl bg-slate-50 focus-within:ring-2 focus-within:ring-green-500 transition-shadow">
            <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
              <MapPin size={12} className="text-green-400" />
            </div>
            <input
              type="text"
              placeholder="Drop-off location"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSeePrice()}
              className="flex-1 bg-transparent text-sm text-slate-900 placeholder-slate-400 outline-none font-medium"
            />
          </div>

          <button
            onClick={handleSeePrice}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
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

      {quote && (
        <BookingModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          pickup={pickup}
          dropoff={dropoff}
          distanceKm={quote.distanceKm}
          durationMinutes={quote.durationMinutes}
          price={quote.price}
        />
      )}
    </>
  );
}
