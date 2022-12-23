export const OrderForm = () => (
  <form className="grid grid-cols-2 mt-8 gap-4">
    <div className="col-span-2 mt-6">
      <span>1. Dane kontaktowe</span>
      <p className="text-sm font-light text-gray-600">
        Dane kontakowe są nam niezbędne do ustalenia szczegółów zamówienia oraz
        przesłania wyceny. Proszę podać przynajmniej jedną formy kontaktu.
      </p>
    </div>

    <div className="col-span-2 md:col-span-1">
      <label
        htmlFor="email"
        className="block mb-2 px-2 text-sm font-medium text-gray-700"
      >
        Adres email
      </label>
      <input
        id="email"
        placeholder="Email"
        required
        type="text"
        className="w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-indigo-accent-400 focus:outline-none focus:shadow-outline"
      />
    </div>

    <div className="col-span-2 md:col-span-1">
      <label
        htmlFor="phone"
        className="block mb-2 px-2 text-sm font-medium text-gray-700"
      >
        Numer telefonu
      </label>
      <input
        id="phone"
        placeholder="Numer telefonu"
        required
        type="text"
        className="w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-indigo-accent-400 focus:outline-none focus:shadow-outline"
      />
    </div>

    <div className="col-span-2 mt-6">
      <span>2. Szczegoły zamówienia</span>
      <p className="text-sm font-light text-gray-600">
        Proszę podać znane szczegóły zamówienia. Jeśli nie jesteś pewien pewnych
        detali, bez obaw, skontaktujemy się z Tobą, aby je ustalić
      </p>
    </div>

    <div className="col-span-2">
      <label
        htmlFor="type"
        className="block mb-2 px-2 text-sm font-medium text-gray-700"
      >
        Rodzaj pieczątki
      </label>
      <select
        id="type"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-indigo-accent-400 block w-full p-2.5"
      >
        <option selected>Dowolna</option>
        <option value="automate" className="text-red">
          W automacie
        </option>
        <option value="stamp">Stempel drewniany</option>
        <option value="dater">Datownik</option>
        <option value="flesh">fleszowa</option>
      </select>
    </div>

    <div className="col-span-2">
      <label
        htmlFor="content"
        className="block mb-2 px-2 text-sm font-medium text-gray-700"
      >
        Treść
      </label>
      <textarea
        id="content"
        placeholder="Treść pieczątki"
        required
        rows={4}
        className="w-full col-span-2 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-indigo-accent-400 focus:outline-none focus:shadow-outline"
      />
    </div>

    <div className="col-span-2">
      <label
        htmlFor="type"
        className="block mb-2 px-2 text-sm font-medium text-gray-700"
      >
        Kolor tuszu
      </label>
      <select
        id="type"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-indigo-accent-400 block w-full p-2.5"
      >
        <option value="black" selected>
          Czarny
        </option>
        <option value="red">Czerwony</option>
        <option value="blue">Niebieski</option>
        <option value="green">Zielony</option>
        <option value="other">Inny/specjalistyczny</option>
      </select>
    </div>

    <div className="col-span-2 mt-6">
      <span>3. Uwagi</span>
      <p className="text-sm font-light text-gray-600">
        Proszę podać wszystkie dodatkowe informacje. Na przykład...
      </p>
    </div>

    <div className="col-span-2">
      <label
        htmlFor="content"
        className="block mb-2 px-2 text-sm font-medium text-gray-700"
      >
        Dodatkowe informacje
      </label>
      <textarea
        id="info"
        placeholder="Dodatkowe informacje, uwagi lub zapytania"
        required
        rows={4}
        className="w-full col-span-2 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-indigo-accent-400 focus:outline-none focus:shadow-outline"
      />
    </div>

    <div className="col-span-2 mt-4 md:col-span-1">
      <button
        onClick={() => console.log("Preview")}
        className="inline-flex items-center justify-center w-full h-12 px-6 font-normal transition duration-200 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:shadow-outline focus:outline-none"
        disabled
      >
        Wygeneruj podgląd
      </button>
    </div>
    <div className="col-span-2 mt-4 md:col-span-1">
      <button
        type="submit"
        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-accent-400 hover:bg-indigo-accent-700 focus:shadow-outline focus:outline-none"
      >
        Wyślij
      </button>
    </div>
  </form>
);
