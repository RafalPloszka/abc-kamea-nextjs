import Head from "next/head";
import { PrivacyPolicyContent } from "@/components/PrivacyPolicyContent";

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Polityka Prywatności - ABC Kamea</title>
        <meta
          name="description"
          content="Zapoznaj się z polityką prywatności ABC Kamea dotyczącą przetwarzania danych osobowych i ochrony prywatności."
        />
        <meta name="robots" content="noindex, nofollow" />
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

      <main className="px-4 py-8 max-w-3xl mx-auto">
        <PrivacyPolicyContent />
      </main>
    </div>
  );
}
