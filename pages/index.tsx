import Head from "next/head";
import { Contact } from "@/components/Contact/Contact";
import { EngraverSection } from "@/components/EngraverSection/EngraverSection";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar/Navbar";
import { StampsSection } from "@/components/StampsSection/StampsSection";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const DESCRIPTION = "ABC Kamea - Pieczątki: ";

const KEYWORDS =
  "pieczątki, pieczątki firmowe, pieczątki online, pieczątki gorzów, pieczątka na zamówienie, datowniki, stemple drewniane, grawerowanie, grawerowanie gorzów, grawer na obrączkach, grawer na zegarku, grawerowanie laserowe, referentki";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ABC Kamea - Pieczątki Gorzów Wlkp.</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3d5afe" />
        <meta name="msapplication-TileColor" content="#3d5afe" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      <main>
        <Header />
        <StampsSection />
        <EngraverSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
