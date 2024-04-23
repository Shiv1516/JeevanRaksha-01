import Head from "next/head";
import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import AppointmentForm from "@/components/AppointmentForm";
import AboutSection from "@/components/AboutSection";
import MedicalEmergency from "@/components/MedicalEmergency";
import FaqSection from "@/components/FaqSection";
import HowWeWork from "@/components/HowWeWork";
import DoctorSection from "@/components/DoctorSection";
import ContactUs from "@/components/ContactUs";
import ServiceCard from "@/components/ServiceCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeevan Raksha - Hospital</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />

      <AppointmentForm />
      <main className="main w100 ofh">
        <AboutSection />
        <ServiceCard />
        <FaqSection />
        <HowWeWork />
        <MedicalEmergency />
        <DoctorSection />
        <ContactUs />
      </main>
    </>
  );
}
