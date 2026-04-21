import { WA_NUMBER } from "./constants";

type BookingPayload = {
  surfaces: string[];
  homeSize: string;
  name: string;
  area: string;
  phone: string;
  preferredDay: string;
};

const build = (message: string): string =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const waGeneric = (): string =>
  build(`Hi GroutDubai, I'd like a quote for grout restoration. Can you help?`);

export const waBooking = (p: BookingPayload): string => {
  const lines = [
    `Hi GroutDubai, I'd like to book a grout restoration.`,
    ``,
    `Surfaces: ${p.surfaces.join(", ") || "—"}`,
    `Home size: ${p.homeSize || "—"}`,
    `Name: ${p.name || "—"}`,
    `Area: ${p.area || "—"}`,
    `Phone: ${p.phone || "—"}`,
    `Preferred day: ${p.preferredDay || "—"}`,
  ];
  return build(lines.join("\n"));
};

export const waKit = (): string =>
  build(
    `Hi GroutDubai, I'd like to order the Grout Maintenance Kit (spray + 2 microfibre towels). Please share the price and delivery options.`
  );

export const waSurface = (surface: string): string =>
  build(
    `Hi GroutDubai, I'd like a quote for ${surface.toLowerCase()} grout restoration.`
  );

export type { BookingPayload };
