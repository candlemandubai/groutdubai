import { useState } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { WhatWeClean } from "./components/WhatWeClean";
import { HowItWorks } from "./components/HowItWorks";
import { ResultsGallery } from "./components/ResultsGallery";
import { Guarantee } from "./components/Guarantee";
import { MaintenanceKit } from "./components/MaintenanceKit";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { WhatsAppFAB } from "./components/WhatsAppFAB";
import { BookingSheet } from "./components/booking/BookingSheet";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <>
      <Nav onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <TrustStrip />
        <WhatWeClean />
        <HowItWorks />
        <ResultsGallery />
        <Guarantee />
        <MaintenanceKit />
        <Testimonials />
        <FAQ />
        <FinalCTA onBook={openBooking} />
      </main>
      <Footer />
      <WhatsAppFAB />
      <BookingSheet open={bookingOpen} onClose={closeBooking} />
    </>
  );
}
