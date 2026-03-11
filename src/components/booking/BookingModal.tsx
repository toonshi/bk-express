"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { DayPicker } from "react-day-picker";
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
import { TIME_SLOTS } from "@/data";
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

export default function BookingModal({
  open,
  onClose,
  pickup,
  dropoff,
  distanceKm,
  durationMinutes,
  price,
}: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("09:00");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState<string>("");
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [formError, setFormError] = useState<string | null>(null);

  const setField =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

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
    if (!form.name.trim()) { setFormError("Please enter your name."); return; }
    if (!form.phone.trim()) { setFormError("Please enter your phone number."); return; }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    setFormError(null);
    setSubmitting(true);
    try {
      const payload: BookingPayload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
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
    setForm({ name: "", phone: "", email: "" });
    setFormError(null);
    setBookingRef("");
    onClose();
  };

  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && handleClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0c0c17] border border-white/[0.08] rounded-2xl shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          {/* Header */}
          <div className="flex items-center justify-between px-7 pt-7 pb-5 border-b border-white/[0.06]">
            <div>
              <Dialog.Title className="text-xl font-bold text-white font-display">
                Confirm your <span className="gradient-text">booking</span>
              </Dialog.Title>
              <Dialog.Description className="text-xs text-white/40 mt-1 font-medium">
                Select a date, time, and enter your details
              </Dialog.Description>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-lg hover:bg-white/[0.06] transition-colors text-white/30 hover:text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {submitted ? (
            <div className="px-7 py-16 flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 bg-primary/15 border border-primary/25 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.2)]">
                <CheckCircle size={32} className="text-primary-light" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-display">Booking Confirmed</h3>
                <p className="text-sm text-white/40 mt-1.5">Your reference number</p>
              </div>
              {bookingRef && (
                <div className="bg-primary/10 border border-primary/20 text-primary-light rounded-xl px-8 py-3.5 font-mono font-semibold text-lg tracking-[0.2em]">
                  {bookingRef}
                </div>
              )}
              <p className="text-white/50 max-w-xs text-sm leading-relaxed">
                Confirmation sent to{" "}
                <span className="text-white">{form.email}</span>.{" "}
                Pickup scheduled for{" "}
                {pickupDateTime && format(pickupDateTime, "MMM d 'at' p")}.
              </p>
              <button
                onClick={handleClose}
                className="mt-3 px-10 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-light transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              >
                Done
              </button>
            </div>
          ) : (
            <div className="px-7 py-7 space-y-7">
              {/* Route summary */}
              <div className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-5 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-primary-light flex-shrink-0" />
                  <div>
                    <p className="text-[11px] text-white/30 font-medium mb-0.5">Pickup</p>
                    <p className="text-sm font-medium text-white">{pickup}</p>
                  </div>
                </div>
                <div className="ml-[3px] w-px h-5 bg-white/10" />
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <div>
                    <p className="text-[11px] text-white/30 font-medium mb-0.5">Drop-off</p>
                    <p className="text-sm font-medium text-white">{dropoff}</p>
                  </div>
                </div>
                <div className="pt-3.5 flex gap-6 border-t border-white/[0.06]">
                  <div>
                    <p className="text-[11px] text-white/30 font-medium mb-0.5">Distance</p>
                    <p className="text-sm font-semibold text-white">{distanceKm.toFixed(1)} km</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-white/30 font-medium mb-0.5">Est. time</p>
                    <p className="text-sm font-semibold text-white">{durationMinutes} min</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-[11px] text-white/30 font-medium mb-0.5">Total</p>
                    <p className="text-xl font-bold text-primary-light font-display">
                      {PRICING.currency} {price.toFixed(0)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Date picker */}
              <div>
                <label className="flex items-center gap-2 text-xs font-semibold text-white/40 mb-3">
                  <CalendarBlank size={14} className="text-primary-light" />
                  Select date
                </label>
                <div className="border border-white/[0.07] rounded-xl p-5 bg-white/[0.03]">
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={{ before: new Date() }}
                    classNames={{
                      root: "w-full",
                      months: "w-full",
                      month: "w-full",
                      month_caption:
                        "flex items-center justify-between mb-5 px-1",
                      caption_label:
                        "text-xs font-semibold text-white/70 select-none",
                      nav: "flex items-center gap-2",
                      button_previous:
                        "w-7 h-7 flex items-center justify-center rounded-lg bg-white/[0.05] hover:bg-white/10 text-white/50 hover:text-white transition-colors",
                      button_next:
                        "w-7 h-7 flex items-center justify-center rounded-lg bg-white/[0.05] hover:bg-white/10 text-white/50 hover:text-white transition-colors",
                      month_grid: "w-full border-collapse",
                      weekdays: "flex w-full mb-2",
                      weekday:
                        "flex-1 text-center text-[10px] font-medium text-white/25 py-2 select-none",
                      weeks: "w-full",
                      week: "flex w-full mt-1",
                      day: "flex-1 flex items-center justify-center p-0",
                      day_button:
                        "w-9 h-9 mx-auto text-xs rounded-lg transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/50 hover:bg-white/[0.08] text-white/60 font-medium cursor-pointer",
                      selected:
                        "!bg-primary !text-white rounded-lg font-semibold shadow-[0_0_12px_rgba(124,58,237,0.4)]",
                      today: "text-primary-light border border-primary/20 font-semibold",
                      outside:
                        "text-white/10 hover:bg-transparent cursor-default",
                      disabled:
                        "text-white/10 cursor-not-allowed hover:!bg-transparent",
                    }}
                  />
                </div>
              </div>

              {/* Time picker */}
              <div>
                <label className="flex items-center gap-2 text-xs font-semibold text-white/40 mb-3">
                  <Clock size={14} className="text-primary-light" />
                  Select time
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2.5 px-2 rounded-lg font-medium text-xs border transition-all ${
                        selectedTime === slot
                          ? "bg-primary/20 text-primary-light border-primary/30 shadow-[0_0_12px_rgba(124,58,237,0.2)]"
                          : "bg-white/[0.03] text-white/40 border-white/[0.06] hover:border-white/15 hover:text-white/70"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimated dropoff */}
              <div aria-live="polite">
                {dropoffDateTime && (
                  <div className="bg-accent/5 border border-accent/15 rounded-xl p-5">
                    <p className="text-xs text-accent/70 font-medium mb-1.5">Estimated arrival</p>
                    <p className="text-base font-semibold text-white font-display">
                      {format(dropoffDateTime, "EEEE, MMM d 'at' h:mm a")}
                    </p>
                    <p className="text-xs text-white/30 mt-1.5">Includes loading buffer time</p>
                  </div>
                )}
              </div>

              {/* Customer details */}
              <div>
                <label className="flex items-center gap-2 text-xs font-semibold text-white/40 mb-3">
                  <User size={14} className="text-primary-light" />
                  Your details
                </label>
                <div className="space-y-2.5">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={setField("name")}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.07] text-sm font-medium text-white placeholder-white/25 focus:outline-none focus:border-primary/40 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone (e.g. +254 700...)"
                    value={form.phone}
                    onChange={setField("phone")}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.07] text-sm font-medium text-white placeholder-white/25 focus:outline-none focus:border-primary/40 transition-all"
                  />
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.07] focus-within:border-primary/40 transition-all">
                    <Envelope size={15} className="text-white/20 flex-shrink-0" />
                    <input
                      type="email"
                      placeholder="Email for confirmation"
                      value={form.email}
                      onChange={setField("email")}
                      className="flex-1 bg-transparent text-sm font-medium text-white placeholder-white/25 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <button
                  onClick={handleClose}
                  className="flex-1 py-3.5 border border-white/[0.08] text-white/40 rounded-xl font-medium text-sm hover:bg-white/[0.05] hover:text-white transition-all"
                >
                  Cancel
                </button>
                <a
                  href="tel:+254700000000"
                  className="flex items-center justify-center gap-2 flex-1 py-3.5 border border-white/[0.08] text-white/60 rounded-xl font-medium text-sm hover:bg-white/[0.05] hover:text-white transition-all"
                >
                  <Phone size={14} />
                  Call Us
                </a>
                <button
                  onClick={handleBook}
                  disabled={!selectedDate || submitting}
                  className="flex-1 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-light transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.35)]"
                >
                  {submitting ? (
                    <>
                      <SpinnerGap size={15} className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </div>

              {formError && (
                <p className="text-xs text-center text-red-400 font-medium" role="alert">
                  {formError}
                </p>
              )}

              {!selectedDate && !formError && (
                <p className="text-xs text-center text-white/20 font-medium">
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
