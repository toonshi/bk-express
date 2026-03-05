import type { ComponentType } from "react";
import { Package, Moon, Truck, House } from "@phosphor-icons/react/ssr";

export interface Service {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  tag: string;
}

export const SERVICES: Service[] = [
  {
    icon: House,
    title: "Luggage & Household Moving",
    description: "Moving house or relocating? We handle furniture, appliances, and personal belongings with care — door to door across Nairobi.",
    tag: "Moving",
  },
  {
    icon: Truck,
    title: "Market Produce Transport",
    description: "Early-morning pickups from Marikiti, City Market, and farms upcountry. Fresh produce delivered fast to your stall or warehouse.",
    tag: "Produce",
  },
  {
    icon: Moon,
    title: "Overnight Parcel Delivery",
    description: "Send parcels by night, arrive by morning. Ideal for businesses shipping between Nairobi, Mombasa, Kisumu, and Nakuru.",
    tag: "Overnight",
  },
  {
    icon: Package,
    title: "Bulk Freight & Lorry Hire",
    description: "Need the whole truck? Hire our lorries for large consignments, construction materials, or wholesale stock movement.",
    tag: "Freight",
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Enter locations",
    description: "Type in your pickup and drop-off addresses anywhere in our coverage zone — we support named towns and market areas.",
  },
  {
    number: "02",
    title: "See your price",
    description: "We calculate the road distance in real time and give you a clear, no-hidden-charges price before you commit.",
  },
  {
    number: "03",
    title: "Pick a date & time",
    description: "Choose when you want us to arrive. We confirm your estimated delivery window automatically.",
  },
  {
    number: "04",
    title: "We deliver",
    description: "Our driver arrives at your gate on time. Track your shipment and reach us by call or WhatsApp any time.",
  },
];

export const CITIES = [
  { name: "Nairobi CBD & Westlands", areas: "Kilimani, Karen, Lavington, Upperhill", time: "1–2 hrs" },
  { name: "Thika Road Corridor", areas: "Kasarani, Ruiru, Juja, Thika Town", time: "2–3 hrs" },
  { name: "South Nairobi", areas: "Langata, Ongata Rongai, Kiserian, Ngong", time: "2–3 hrs" },
  { name: "Eastlands", areas: "Kayole, Umoja, Embakasi, Utawala, Syokimau", time: "1–2 hrs" },
  { name: "Satellite Towns", areas: "Kitengela, Athi River, Limuru, Kikuyu", time: "3–5 hrs" },
  { name: "Upcountry Routes", areas: "Mombasa, Kisumu, Nakuru — overnight service", time: "Overnight", comingSoon: false },
];

export const TESTIMONIALS = [
  {
    name: "Amina W.",
    role: "Market trader, Marikiti",
    quote: "They pick up my cabbages at 4 AM and they're at my stall in Westlands before 7. I haven't missed a single market day since I switched to BK Express.",
    initials: "AW",
  },
  {
    name: "Brian O.",
    role: "E-commerce seller, Nairobi",
    quote: "Sent 12 parcels overnight to Mombasa — all arrived by 8 AM. The confirmation email came instantly. This is the real deal.",
    initials: "BO",
  },
  {
    name: "Faith K.",
    role: "Relocating homeowner",
    quote: "They moved my whole house in one trip. The guys were careful with my TV and fridge. Got a price online in seconds — no surprise costs at the end.",
    initials: "FK",
  },
];

export const PLANS = [
  {
    name: "Standard",
    tagline: "Parcels & light goods",
    base: 350,
    perKm: 25,
    features: ["Up to 100 kg payload", "Same-day scheduling", "Email & SMS confirmation", "Standard insurance"],
    highlight: false,
  },
  {
    name: "Express",
    tagline: "Urgent & time-sensitive",
    base: 600,
    perKm: 40,
    features: ["Priority pickup within 2 hrs", "Up to 500 kg payload", "Live driver tracking", "WhatsApp updates", "Enhanced insurance"],
    highlight: true,
  },
  {
    name: "Lorry Hire",
    tagline: "Bulk freight & full loads",
    base: null,
    perKm: null,
    features: ["Full 3-tonne lorry", "Market produce & household", "Overnight intercity routes", "Dedicated driver", "Monthly invoicing"],
    highlight: false,
  },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#about" },
  { label: "Coverage", href: "#cities" },
  { label: "Pricing", href: "#pricing" },
];

export const STATS = [
  { value: "500+", label: "Trucks & lorries on the road" },
  { value: "98%", label: "On-time delivery rate" },
  { value: "4.9 ★", label: "Customer rating" },
];

export const TIME_SLOTS = [
  "05:00", "06:00", "07:00", "08:00", "09:00", "10:00",
  "11:00", "12:00", "13:00", "14:00", "15:00", "16:00",
  "17:00", "18:00", "20:00", "22:00",
];
