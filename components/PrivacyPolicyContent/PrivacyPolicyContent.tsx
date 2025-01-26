const PolicySubHeading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-xl font-medium mt-8">{children}</h2>;
};

export const PrivacyPolicyContent = () => (
  <div className="text-gray-800">
    <h1 className="text-2xl font-bold mb-6">Polityka Prywatności</h1>
    <p>
      Ostatnia aktualizacja: <strong>26.01.2025</strong>
    </p>
    <PolicySubHeading>1. Administrator danych osobowych</PolicySubHeading>
    <p>
      Administratorem Twoich danych osobowych jest{" "}
      <strong>&quot;ABC KAMEA&quot; PIOTR PŁOSZKA</strong>, z siedzibą w{" "}
      <strong>Gorzowie Wielkopolskim, ul. Łużycka 31</strong>. Możesz się z nami
      skontaktować pod adresem e-mail: <strong>kamea@pieczatki.gorz.pl</strong>.
    </p>
    <PolicySubHeading>2. Zakres przetwarzanych danych</PolicySubHeading>
    <p>Zbieramy następujące dane osobowe:</p>
    <ul className="list-disc list-inside">
      <li>Adres e-mail.</li>
      <li>Numer telefonu.</li>
      <li>Informacje podane w formularzu zamówienia.</li>
    </ul>
    <PolicySubHeading>3. Cel przetwarzania danych</PolicySubHeading>
    <p>
      Twoje dane osobowe przetwarzamy w celu realizacji zamówienia, przesyłania
      wycen oraz odpowiedzi na zapytania przesłane za pomocą formularza.
    </p>
    <PolicySubHeading>4. Podstawa prawna przetwarzania</PolicySubHeading>
    <ul className="list-disc list-inside">
      <li>
        Art. 6 ust. 1 lit. a RODO – zgoda na przetwarzanie danych osobowych.
      </li>
      <li>
        Art. 6 ust. 1 lit. b RODO – przetwarzanie jest niezbędne do wykonania
        umowy (realizacja zamówienia).
      </li>
    </ul>
    <PolicySubHeading>5. Odbiorcy danych</PolicySubHeading>
    <p>
      Twoje dane osobowe mogą być udostępniane podmiotom zewnętrznym, które
      wspierają nas w realizacji usług, tj.:
    </p>
    <ul className="list-disc list-inside">
      <li>Formspree (narzędzie do obsługi formularzy).</li>
      <li>Vercel (platforma hostingowa naszej strony internetowej).</li>
    </ul>
    <br />
    <p>
      Podmioty te przetwarzają dane zgodnie z umowami o powierzenie danych i
      zapewniają ich odpowiednią ochronę.
    </p>
    <PolicySubHeading>6. Czas przechowywania danych</PolicySubHeading>
    <p>Twoje dane osobowe przechowujemy:</p>
    <ul className="list-disc list-inside">
      <li>
        Przez czas niezbędny do realizacji zamówienia oraz przez okres wymagany
        przepisami prawa (np. w celach księgowych).
      </li>
      <li>
        Do momentu wycofania zgody, jeśli dane są przetwarzane na jej podstawie.
      </li>
    </ul>
    <PolicySubHeading>7. Twoje prawa</PolicySubHeading>
    <p>Masz prawo do:</p>
    <ul className="list-disc list-inside">
      <li>Dostępu do swoich danych.</li>
      <li>Sprostowania swoich danych.</li>
      <li>Usunięcia swoich danych</li>
      <li>Ograniczenia przetwarzania danych.</li>
      <li>Wniesienia sprzeciwu wobec przetwarzania danych.</li>
      <li>Przenoszenia swoich danych.</li>
      <li>
        Wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych
        Osobowych).
      </li>
    </ul>
    <PolicySubHeading>8. Pliki cookies</PolicySubHeading>
    <p>
      Strona korzysta z plików cookies w celu zapewnienia jej prawidłowego
      działania i analizy ruchu. Możesz zarządzać plikami cookies za pomocą
      ustawień swojej przeglądarki.
    </p>
    <PolicySubHeading>9. Bezpieczeństwo danych</PolicySubHeading>
    <p>
      Dokładamy wszelkich starań, aby Twoje dane były chronione przed
      nieautoryzowanym dostępem, utratą lub zniszczeniem.
    </p>
    <PolicySubHeading>10. Zmiany w polityce prywatności</PolicySubHeading>
    <p>
      Polityka prywatności może być aktualizowana w celu dostosowania jej do
      obowiązujących przepisów prawa lub zmian w sposobie działania strony.
      Zawsze informujemy o zmianach poprzez opublikowanie nowej wersji na
      stronie.
    </p>
  </div>
);
