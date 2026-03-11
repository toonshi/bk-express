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
        <Dialog.Overlay className="fixed inset-0 bg-dark/60 backdrop-blur-md z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-dark border border-white/10 rounded-xl shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          {/* Header */}
          <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/5">
            <div>
              <Dialog.Title className="text-2xl font-black text-white uppercase font-display italic tracking-tight">
                Finalize <span className="text-primary">Dispatch</span>
              </Dialog.Title>
              <Dialog.Description className="text-[10px] text-white/40 mt-1 font-black uppercase tracking-widest">
                System identification & logistics scheduling
              </Dialog.Description>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors text-white/40 hover:text-white"
              aria-label="Close"
            >
              <X size={20} weight="bold" />
            </button>
          </div>

          {submitted ? (
            <div className="px-8 py-16 flex flex-col items-center text-center gap-6">
              <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(195,238,143,0.1)]">
                <CheckCircle size={40} className="text-primary" weight="bold" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white uppercase font-display italic">Sequence Confirmed</h3>
                <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mt-2">Operational Reference Generated</p>
              </div>
              {bookingRef && (
                <div className="bg-white/5 border border-white/10 text-primary rounded-lg px-8 py-4 font-mono font-black text-xl tracking-[0.3em] shadow-inner">
                  {bookingRef}
                </div>
              )}
              <p className="text-white/60 max-w-xs text-sm font-bold uppercase tracking-tight leading-relaxed">
                Logistics data dispatched to <span className="text-white">{form.email}</span>. 
                Unit deployment scheduled for {pickupDateTime && format(pickupDateTime, "MMM d 'at' p")}.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-12 py-4 bg-primary text-dark rounded font-black text-[11px] uppercase tracking-widest hover:bg-yellow transition-all"
              >
                Return to Terminal
              </button>
            </div>
          ) : (
            <div className="px-8 py-8 space-y-8">
              {/* Route summary */}
              <div className="bg-white/5 border border-white/5 rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(195,238,143,0.8)]" />
                  <div>
                    <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">Origin</p>
                    <p className="text-sm font-bold text-white uppercase tracking-tight leading-tight">{pickup}</p>
                  </div>
                </div>
                <div className="ml-[3px] w-px h-6 bg-white/10" />
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-yellow shadow-[0_0_8px_rgba(255,242,0,0.8)]" />
                  <div>
                    <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">Destination</p>
                    <p className="text-sm font-bold text-white uppercase tracking-tight leading-tight">{dropoff}</p>
                  </div>
                </div>
                <div className="pt-4 flex gap-8 border-t border-white/5">
                  <div>
                    <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">Range</p>
                    <p className="text-sm font-black text-white">{distanceKm.toFixed(1)} KM</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">Window</p>
                    <p className="text-sm font-black text-white">{durationMinutes} MIN</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">Rate</p>
                    <p className="text-xl font-black text-primary font-display uppercase tracking-tight">
                      {PRICING.currency} {price.toFixed(0)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Date picker */}
              <div>
                <label className="flex items-center gap-2 text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">
                  <CalendarBlank size={16} weight="bold" className="text-primary" />
                  Select Deployment Date
                </label>
                <div className="border border-white/10 rounded-lg p-6 bg-white/5">
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
                        "flex items-center justify-between mb-6 px-1",
                      caption_label:
                        "text-xs font-black text-white uppercase tracking-[0.2em] select-none",
                      nav: "flex items-center gap-2",
                      button_previous:
                        "w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-white/10 text-white transition-colors",
                      button_next:
                        "w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-white/10 text-white transition-colors",
                      month_grid: "w-full border-collapse",
                      weekdays: "flex w-full mb-2",
                      weekday:
                        "flex-1 text-center text-[9px] font-black text-white/20 uppercase tracking-widest py-2 select-none",
                      weeks: "w-full",
                      week: "flex w-full mt-1",
                      day: "flex-1 flex items-center justify-center p-0",
                      day_button:
                        "w-10 h-10 mx-auto text-[11px] rounded transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary hover:bg-white/10 text-white/60 font-bold cursor-pointer",
                      selected:
                        "!bg-primary !text-dark rounded hover:!bg-yellow font-black",
                      today: "text-primary border border-primary/20 font-black",
                      outside:
                        "text-white/10 hover:bg-transparent cursor-default",
                      disabled:
                        "text-white/5 cursor-not-allowed hover:!bg-transparent",
                    }}
                  />
                </div>
              </div>

              {/* Time picker */}
              <div>
                <label className="flex items-center gap-2 text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">
                  <Clock size={16} weight="bold" className="text-primary" />
                  Select Dispatch Time
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`py-3 px-2 rounded font-black text-[11px] uppercase tracking-wider border transition-all ${
                        selectedTime === slot
                          ? "bg-primary text-dark border-primary"
                          : "bg-white/5 text-white/40 border-white/5 hover:border-white/20 hover:text-white"
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
                  <div className="bg-primary/5 border border-primary/10 rounded-lg p-6">
                    <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-2">Calculated Final Arrival</p>
                    <p className="text-xl font-black text-white font-display uppercase italic tracking-tight">
                      {format(dropoffDateTime, "EEEE, MMM d 'at' h:mm a")}
                    </p>
                    <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest mt-2">
                      Includes tactical loading & industrial buffer
                    </p>
                  </div>
                )}
              </div>

              {/* Customer details */}
              <div>
                <label className="flex items-center gap-2 text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">
                  <User size={16} weight="bold" className="text-primary" />
                  Identity Verification
                </label>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="FULL NAME"
                    value={form.name}
                    onChange={setField("name")}
                    className="w-full px-5 py-4 rounded bg-white/5 border border-white/5 text-[13px] font-bold text-white uppercase tracking-tight placeholder-white/20 focus:outline-none focus:border-primary/50 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="PHONE (e.g. +254 700...)"
                    value={form.phone}
                    onChange={setField("phone")}
                    className="w-full px-5 py-4 rounded bg-white/5 border border-white/5 text-[13px] font-bold text-white uppercase tracking-tight placeholder-white/20 focus:outline-none focus:border-primary/50 transition-all"
                  />
                  <div className="flex items-center gap-4 px-5 py-4 rounded bg-white/5 border border-white/5 focus-within:border-primary/50 transition-all">
                    <Envelope size={18} weight="bold" className="text-white/20 flex-shrink-0" />
                    <input
                      type="email"
                      placeholder="EMAIL FOR CONFIRMATION"
                      value={form.email}
                      onChange={setField("email")}
                      className="flex-1 bg-transparent text-[13px] font-bold text-white uppercase tracking-tight placeholder-white/20 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleClose}
                  className="flex-1 py-4 border border-white/10 text-white/40 rounded font-black text-[11px] uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all"
                >
                  ABORT
                </button>
                <a
                  href="tel:+254700000000"
                  className="flex items-center justify-center gap-2 flex-1 py-4 border border-white/10 text-white rounded font-black text-[11px] uppercase tracking-widest hover:bg-white/5 transition-all"
                >
                  <Phone size={16} weight="bold" />
                  TALK TO OPS
                </a>
                <button
                  onClick={handleBook}
                  disabled={!selectedDate || submitting}
                  className="flex-1 py-4 bg-primary text-dark rounded font-black text-[11px] uppercase tracking-widest hover:bg-yellow transition-all disabled:opacity-20 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <SpinnerGap size={18} weight="bold" className="animate-spin" />
                      PROCESSING
                    </>
                  ) : (
                    "INITIALIZE BOOKING"
                  )}
                </button>
              </div>

              {formError && (
                <p className="text-[10px] text-center text-yellow font-black uppercase tracking-widest" role="alert">
                  [ERROR]: {formError}
                </p>
              )}

              {!selectedDate && !formError && (
                <p className="text-[9px] text-center text-white/20 font-bold uppercase tracking-[0.2em]">
                  Awaiting operational date selection
                </p>
              )}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
