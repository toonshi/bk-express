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
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100">
            <div>
              <Dialog.Title className="text-xl font-bold text-slate-900">
                Complete Your Booking
              </Dialog.Title>
              <Dialog.Description className="text-sm text-slate-500 mt-0.5">
                Confirm your pickup details below
              </Dialog.Description>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {submitted ? (
            <div className="px-6 py-10 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Booking Confirmed!</h3>
              {bookingRef && (
                <div className="bg-slate-900 text-green-400 rounded-xl px-6 py-3 font-mono font-bold text-lg tracking-widest">
                  {bookingRef}
                </div>
              )}
              <p className="text-slate-500 max-w-xs text-sm">
                A confirmation has been sent to{" "}
                <strong className="text-slate-700">{form.email}</strong>. Our team will be
                ready on {pickupDateTime && format(pickupDateTime, "PPP 'at' p")}.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-8 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <div className="px-6 py-5 space-y-6">
              {/* Route summary */}
              <div className="bg-slate-50 rounded-xl p-4 space-y-3 border border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <MapPin size={11} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Pickup</p>
                    <p className="text-sm font-semibold text-slate-900">{pickup}</p>
                  </div>
                </div>
                <div className="ml-2.5 w-px h-3 bg-slate-200" />
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                    <MapPin size={11} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Drop-off</p>
                    <p className="text-sm font-semibold text-slate-900">{dropoff}</p>
                  </div>
                </div>
                <div className="pt-2 flex gap-4 border-t border-slate-200">
                  <div>
                    <p className="text-xs text-slate-400">Distance</p>
                    <p className="text-sm font-bold text-slate-900">{distanceKm.toFixed(1)} km</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Est. duration</p>
                    <p className="text-sm font-bold text-slate-900">{durationMinutes} min</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-xs text-slate-400">Total price</p>
                    <p className="text-lg font-bold text-green-600">
                      {PRICING.currency} {price.toFixed(0)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Date picker */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-3">
                  <CalendarBlank size={16} className="text-green-600" />
                  Pickup Date
                </label>
                <div className="border border-slate-200 rounded-xl p-4">
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
                        "flex items-center justify-between mb-3 px-1",
                      caption_label:
                        "text-sm font-semibold text-slate-900 select-none",
                      nav: "flex items-center gap-1",
                      button_previous:
                        "w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 transition-colors",
                      button_next:
                        "w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 transition-colors",
                      month_grid: "w-full border-collapse",
                      weekdays: "flex w-full mb-1",
                      weekday:
                        "flex-1 text-center text-[11px] font-semibold text-slate-400 uppercase tracking-wider py-1 select-none",
                      weeks: "w-full",
                      week: "flex w-full mt-1",
                      day: "flex-1 flex items-center justify-center p-0",
                      day_button:
                        "w-9 h-9 mx-auto text-sm rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 hover:bg-slate-100 text-slate-700 font-medium cursor-pointer",
                      selected:
                        "!bg-green-600 !text-white rounded-lg hover:!bg-green-700 font-bold",
                      today: "text-green-600 font-bold",
                      outside:
                        "text-slate-300 hover:bg-transparent cursor-default",
                      disabled:
                        "text-slate-300 cursor-not-allowed hover:!bg-transparent",
                    }}
                  />
                </div>
              </div>

              {/* Time picker */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-3">
                  <Clock size={16} className="text-green-600" />
                  Pickup Time
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-2 rounded-lg text-sm font-medium border transition-all ${
                        selectedTime === slot
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-white text-slate-600 border-slate-200 hover:border-slate-900 hover:text-slate-900"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dropoff time */}
              <div aria-live="polite">
                {dropoffDateTime && (
                  <div className="bg-slate-900 text-white rounded-xl p-4">
                    <p className="text-xs text-slate-400 mb-1">Estimated drop-off</p>
                    <p className="text-base font-bold text-green-400">
                      {format(dropoffDateTime, "EEEE, MMM d 'at' h:mm a")}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Includes 30 min loading &amp; unloading buffer
                    </p>
                  </div>
                )}
              </div>

              {/* Customer details */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-3">
                  <User size={16} className="text-green-600" />
                  Your Details
                </label>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={setField("name")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number (e.g. +254 700 000 000)"
                    value={form.phone}
                    onChange={setField("phone")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
                  />
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-green-500 transition-shadow">
                    <Envelope size={15} className="text-slate-400 flex-shrink-0" />
                    <input
                      type="email"
                      placeholder="Email address (for confirmation)"
                      value={form.email}
                      onChange={setField("email")}
                      className="flex-1 bg-transparent text-sm text-slate-900 placeholder-slate-400 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleClose}
                  className="flex-1 py-3 border border-slate-200 text-slate-600 rounded-xl font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <a
                  href="tel:+254700000000"
                  className="flex items-center justify-center gap-2 flex-1 py-3 border-2 border-slate-900 text-slate-900 rounded-xl font-semibold text-sm hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <Phone size={15} />
                  Call Us
                </a>
                <button
                  onClick={handleBook}
                  disabled={!selectedDate || submitting}
                  className="flex-1 py-3 bg-green-600 text-white rounded-xl font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                <p className="text-xs text-center text-slate-400">
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
