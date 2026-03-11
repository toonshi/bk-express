"use client";

import { useState } from "react";
import { SpinnerGap } from "@phosphor-icons/react/ssr";
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
      <div id="booking" className="w-full">
        <div className="flex flex-col gap-2">
          <LocationInput
            placeholder="Pickup location"
            value={pickup}
            onChange={setPickup}
            onKeyDown={(e) => e.key === "Enter" && handleSeePrice()}
            iconVariant="dark"
          />
          <LocationInput
            placeholder="Drop-off location"
            value={dropoff}
            onChange={setDropoff}
            onKeyDown={(e) => e.key === "Enter" && handleSeePrice()}
            iconVariant="dark"
          />
          <button
            onClick={handleSeePrice}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#111111] text-white rounded-lg font-semibold text-[14px] hover:bg-[#333333] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {loading ? (
              <>
                <SpinnerGap size={16} className="animate-spin" />
                Processing…
              </>
            ) : (
              "Get Instant Quote →"
            )}
          </button>
        </div>

        {error && (
          <p
            className="mt-2 text-[12px] text-red-600 font-medium"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {error}
          </p>
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
