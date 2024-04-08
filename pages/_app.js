import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopToScroll from "@/components/TopToScroll";
import WhatsApp from "@/components/WhatsApp";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <TopToScroll />
      <WhatsApp />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
