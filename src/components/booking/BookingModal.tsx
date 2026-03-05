"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { DayPicker } from "react-day-picker";
import "react-day-picker/src/style.css";
import {
  X,
  MapPin,
  Clock,
  CalendarBlank,
  Phone,
  CheckCircle,
  SpinnerGap,
  User,
  Envelope,
} from "@phosphor-icons/react/ssr";
import { format } from "date-fns";
import { PRICING, estimateDropoffTime } from "@/lib/distance";
import type { BookingPayload } from "@/app/api/bookings/route";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  pickup: string;
  dropoff: string;
  distanceKm: number;
  durationMinutes: number;
  price: number;
}

const TIME_SLOTS = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

export default function BookingModal({
  open,
  onClose,
  pickup,
  dropoff,
  distanceKm,
  durationMinutes,
  price,
}: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    undefined
  );
  const [selectedTime, setSelectedTime] = useState<string>("09:00");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState<string>("");

  // Customer details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const pickupDateTime =
    selectedDate && selectedTime
      ? (() => {
          const [h, m] = selectedTime.split(":").map(Number);
          const dt = new Date(selectedDate);
          dt.setHours(h, m, 0, 0);
          return dt;
        })()
      : null;

  const dropoffDateTime = pickupDateTime
    ? estimateDropoffTime(pickupDateTime, durationMinutes)
    : null;

  const handleBook = async () => {
    if (!selectedDate || !selectedTime) return;
    if (!name.trim()) { setFormError("Please enter your name."); return; }
    if (!phone.trim()) { setFormError("Please enter your phone number."); return; }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    setFormError(null);
    setSubmitting(true);
    try {
      const payload: BookingPayload = {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        pickup,
        dropoff,
        distanceKm,
        durationMinutes,
        price,
        pickupDate: pickupDateTime!.toISOString(),
        pickupTime: selectedTime,
        estimatedDropoff: dropoffDateTime!.toISOString(),
      };
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Booking failed.");
      setBookingRef(data.ref as string);
      setSubmitted(true);
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setSelectedDate(undefined);
    setSelectedTime("09:00");
    setName("");
    setPhone("");
    setEmail("");
    setFormError(null);
    setBookingRef("");
    onClose();
  };

  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && handleClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
            <div>
              <Dialog.Title className="text-xl font-bold text-[#1A1C22]">
                Complete Your Booking
              </Dialog.Title>
              <Dialog.Description className="text-sm text-gray-500 mt-0.5">
                Confirm your pickup details below
              </Dialog.Description>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {submitted ? (
            /* Success state */
            <div className="px-6 py-10 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-[#B9FF66] rounded-full flex items-center justify-center">
                <CheckCircle size={32} className="text-[#1A1C22]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1C22]">
                Booking Confirmed!
              </h3>
              {bookingRef && (
                <div className="bg-[#1A1C22] text-[#B9FF66] rounded-xl px-6 py-3 font-mono font-bold text-lg tracking-widest">
                  {bookingRef}
                </div>
              )}
              <p className="text-gray-500 max-w-xs text-sm">
                A confirmation has been sent to <strong>{email}</strong>. Our
                team will be ready on{" "}
                {pickupDateTime && format(pickupDateTime, "PPP 'at' p")}.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-8 py-3 bg-[#1A1C22] text-white rounded-xl font-semibold hover:bg-[#2d3142] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <div className="px-6 py-5 space-y-6">
              {/* Route summary */}
              <div className="bg-[#F6F6F6] rounded-xl p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#B9FF66] flex items-center justify-center flex-shrink-0">
                    <MapPin size={11} className="text-[#1A1C22]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                      Pickup
                    </p>
                    <p className="text-sm font-semibold text-[#1A1C22]">
                      {pickup}
                    </p>
                  </div>
                </div>
                <div className="ml-2.5 w-px h-3 bg-gray-300" />
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#1A1C22] flex items-center justify-center flex-shrink-0">
                    <MapPin size={11} className="text-[#B9FF66]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                      Drop-off
                    </p>
                    <p className="text-sm font-semibold text-[#1A1C22]">
                      {dropoff}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="pt-2 flex gap-4 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-400">Distance</p>
                    <p className="text-sm font-bold text-[#1A1C22]">
                      {distanceKm.toFixed(1)} km
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Est. duration</p>
                    <p className="text-sm font-bold text-[#1A1C22]">
                      {durationMinutes} min
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-xs text-gray-400">Total price</p>
                    <p className="text-lg font-bold text-[#1A1C22]">
                      {PRICING.currency} {price.toFixed(0)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Date picker */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-[#1A1C22] mb-3">
                  <CalendarBlank size={16} />
                  Pickup Date
                </label>
                <div className="flex justify-center border border-gray-200 rounded-xl overflow-hidden">
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={{ before: new Date() }}
                    classNames={{
                      root: "p-0",
                      months: "p-3",
                    }}
                  />
                </div>
              </div>

              {/* Time picker */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-[#1A1C22] mb-3">
                  <Clock size={16} />
                  Pickup Time
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-2 rounded-lg text-sm font-medium border transition-all ${
                        selectedTime === slot
                          ? "bg-[#1A1C22] text-[#B9FF66] border-[#1A1C22]"
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#1A1C22] hover:text-[#1A1C22]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dropoff time (auto-calculated) */}
              <div aria-live="polite">
                {dropoffDateTime && (
                  <div className="bg-[#1A1C22] text-white rounded-xl p-4">
                    <p className="text-xs text-gray-400 mb-1">
                      Estimated drop-off
                    </p>
                    <p className="text-base font-bold text-[#B9FF66]">
                      {format(dropoffDateTime, "EEEE, MMM d 'at' h:mm a")}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Includes 30 min loading &amp; unloading buffer
                    </p>
                  </div>
                )}
              </div>

              {/* Customer details */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-[#1A1C22] mb-3">
                  <User size={16} />
                  Your Details
                </label>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1C22] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B9FF66] transition-shadow"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number (e.g. +254 700 000 000)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1C22] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B9FF66] transition-shadow"
                  />
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-[#B9FF66] transition-shadow">
                    <Envelope size={15} className="text-gray-400 flex-shrink-0" />
                    <input
                      type="email"
                      placeholder="Email address (for confirmation)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-transparent text-sm text-[#1A1C22] placeholder-gray-400 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleClose}
                  className="flex-1 py-3 border border-gray-200 text-gray-600 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <a
                  href="tel:+254700000000"
                  className="flex items-center justify-center gap-2 flex-1 py-3 border-2 border-[#1A1C22] text-[#1A1C22] rounded-xl font-semibold text-sm hover:bg-[#1A1C22] hover:text-white transition-colors"
                >
                  <Phone size={15} />
                  Call Us
                </a>
                <button
                  onClick={handleBook}
                  disabled={!selectedDate || submitting}
                  className="flex-1 py-3 bg-[#B9FF66] text-[#1A1C22] rounded-xl font-bold text-sm hover:bg-[#a8ef55] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <SpinnerGap size={15} className="animate-spin" />
                      Booking…
                    </>
                  ) : (
                    "Book Now"
                  )}
                </button>
              </div>

              {formError && (
                <p className="text-xs text-center text-red-500 font-medium" role="alert">
                  {formError}
                </p>
              )}

              {!selectedDate && !formError && (
                <p className="text-xs text-center text-gray-400">
                  Please select a pickup date to continue
                </p>
              )}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
