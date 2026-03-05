import type { ComponentType } from "react";
import { Package, Clock, ShieldCheck, Truck } from "@phosphor-icons/react/ssr";

export interface Service {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  tag: string;
}

export const SERVICES: Service[] = [
  {
    icon: Clock,
    title: "Same-Day Delivery",
    description: "Urgent parcels picked up and delivered within hours anywhere in the city.",
    tag: "Express",
  },
  {
    icon: Package,
    title: "Standard Delivery",
    description: "Scheduled deliveries at a great price for non-urgent packages and goods.",
    tag: "Affordable",
  },
  {
    icon: Truck,
    title: "Bulk & Freight",
    description: "Large volume pickups for businesses — furniture, stock, and equipment.",
    tag: "Business",
  },
  {
    icon: ShieldCheck,
    title: "Secure Handling",
    description: "Fragile or high-value items handled with extra care and full insurance.",
    tag: "Protected",
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Enter locations",
    description: "Type in your pickup and drop-off addresses. We support any location in our coverage zone.",
  },
  {
    number: "02",
    title: "See your price",
    description: "We instantly calculate the distance using real road routing and give you a transparent price.",
  },
  {
    number: "03",
    title: "Pick a date & time",
    description: "Choose when you want us to arrive. We'll automatically calculate your estimated delivery time.",
  },
  {
    number: "04",
    title: "We deliver",
    description: "Our team arrives at your pickup location on time and ensures safe, fast delivery.",
  },
];

export const CITIES = [
  { name: "Nairobi CBD", areas: "Westlands, Kilimani, Karen, Lavington", time: "1–2 hrs" },
  { name: "Thika Road", areas: "Kasarani, Ruiru, Juja, Thika", time: "2–3 hrs" },
  { name: "South Nairobi", areas: "Langata, Ongata Rongai, Kiserian", time: "2–3 hrs" },
  { name: "Eastlands", areas: "Kayole, Umoja, Embakasi, Utawala", time: "1–2 hrs" },
  { name: "Satellite Towns", areas: "Kitengela, Athi River, Limuru, Kikuyu", time: "3–5 hrs" },
  { name: "Coming Soon", areas: "Mombasa, Kisumu, Nakuru", time: "—", comingSoon: true },
];

export const TESTIMONIALS = [
  {
    name: "Amina W.",
    role: "Small business owner",
    quote: "BK Express has become our go-to for deliveries. The price calculator is a game-changer — no more guessing!",
    initials: "AW",
  },
  {
    name: "Brian O.",
    role: "E-commerce seller",
    quote: "I was skeptical at first but the same-day service genuinely delivered in under 3 hours. Highly recommend.",
    initials: "BO",
  },
  {
    name: "Faith K.",
    role: "Freelance designer",
    quote: "Super easy to use. I booked on my phone in 2 minutes and my package arrived safely the same afternoon.",
    initials: "FK",
  },
];

export const PLANS = [
  {
    name: "Standard",
    tagline: "For everyday deliveries",
    base: 150,
    perKm: 25,
    features: ["Same-day scheduling", "Real-time tracking", "Standard insurance", "Email confirmation"],
    highlight: false,
  },
  {
    name: "Express",
    tagline: "For urgent pickups",
    base: 250,
    perKm: 35,
    features: ["Priority pickup", "Live GPS tracking", "Enhanced insurance", "SMS + Email updates", "Dedicated support"],
    highlight: true,
  },
  {
    name: "Business",
    tagline: "For high-volume clients",
    base: null,
    perKm: null,
    features: ["Volume discounts", "Dedicated account manager", "Custom routing", "Monthly invoicing", "Priority SLA"],
    highlight: false,
  },
];

export const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Cities", href: "#cities" },
  { label: "Pricing", href: "#pricing" },
];

export const STATS = [
  { value: "5,000+", label: "Deliveries completed" },
  { value: "98%", label: "On-time rate" },
  { value: "4.9 ★", label: "Customer rating" },
];

export const TIME_SLOTS = [
  "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
];
