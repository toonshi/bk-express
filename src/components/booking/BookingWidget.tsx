"use client";

import { useState } from "react";
import { ArrowRight, SpinnerGap } from "@phosphor-icons/react/ssr";
import BookingModal from "./BookingModal";
import LocationInput from "./LocationInput";

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
        className="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/[0.08] p-2 w-full overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.12)]"
      >
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1">
            <LocationInput
              placeholder="Pickup location"
              value={pickup}
              onChange={setPickup}
              onKeyDown={(e) => e.key === "Enter" && handleSeePrice()}
              iconVariant="green"
            />
          </div>

          <div className="flex-1">
            <LocationInput
              placeholder="Drop-off location"
              value={dropoff}
              onChange={setDropoff}
              onKeyDown={(e) => e.key === "Enter" && handleSeePrice()}
              iconVariant="yellow"
            />
          </div>

          <button
            onClick={handleSeePrice}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-light transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-[0_0_20px_rgba(124,58,237,0.4)]"
          >
            {loading ? (
              <>
                <SpinnerGap size={16} className="animate-spin" />
                Processing
              </>
            ) : (
              "Get Quote →"
            )}
          </button>
        </div>

        {error && (
          <p className="mt-2 px-4 text-xs text-red-400 font-medium">{error}</p>
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
