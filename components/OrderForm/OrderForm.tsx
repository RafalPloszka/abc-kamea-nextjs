import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { OrderStatus } from "pages/order";

type Inputs = {
  email: string;
  phone: string;
  stampType: string;
  content: string;
  color: string;
  info?: string;
};

interface OrderFormProps {
  setOrderStatus: Dispatch<SetStateAction<OrderStatus>>;
}

export const OrderForm = ({ setOrderStatus }: OrderFormProps) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    axios({
      method: "POST",
      url: "https://formspree.io/f/xpzeqlng",
      data: parseOrderContent(data),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) setOrderStatus("success");
      })
      .catch((error) => {
        console.log(error);
        setOrderStatus("error");
      });
  };

  return (
    <form
      className="grid grid-cols-2 mt-8 gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-span-2 mt-6">
        <span>1. Dane kontaktowe</span>
        <p className="text-sm font-light text-gray-600">
          Dane kontakowe są nam niezbędne do ustalenia szczegółów zamówienia
          oraz przesłania wyceny.
        </p>
      </div>

      <div className="col-span-2 md:col-span-1">
        <label
          htmlFor="email"
          className="block mb-2 px-2 text-sm font-medium text-gray-700"
        >
          Adres email
          <span className="text-red-accent-200">*</span>
        </label>
        <input
          {...register("email")}
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
          <span className="text-red-accent-200">*</span>
        </label>
        <input
          {...register("phone")}
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
          Proszę podać znane szczegóły zamówienia. Jeśli nie jesteś pewien
          pewnych detali, bez obaw, skontaktujemy się z Tobą, aby je ustalić
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
          {...register("stampType")}
          id="type"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-indigo-accent-400 block w-full p-2.5"
        >
          <option selected>Dowolna</option>
          <option value="automat" className="text-red">
            W automacie
          </option>
          <option value="stempel">Stempel drewniany</option>
          <option value="datownik">Datownik</option>
          <option value="fleszowa">Fleszowa</option>
          <option value="stamp">Stempel drewniany</option>
          <option value="dater">Datownik</option>
          <option value="flesh">Fleszowa</option>
        </select>
      </div>

      <div className="col-span-2">
        <label
          htmlFor="content"
          className="block mb-2 px-2 text-sm font-medium text-gray-700"
        >
          Treść
          <span className="text-red-accent-200">*</span>
        </label>
        <textarea
          {...register("content")}
          id="content"
          placeholder="Treść pieczątki"
          required
          rows={4}
          className="w-full col-span-2 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-indigo-accent-400 focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="col-span-2">
        <label
          htmlFor="color"
          className="block mb-2 px-2 text-sm font-medium text-gray-700"
        >
          Kolor tuszu
        </label>
        <select
          {...register("color")}
          id="color"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-indigo-accent-400 block w-full p-2.5"
        >
          <option value="czarny" selected>
            Czarny
          </option>
          <option value="czerwony">Czerwony</option>
          <option value="niebieski">Niebieski</option>
          <option value="zielony">Zielony</option>
          <option value="red">Czerwony</option>
          <option value="blue">Niebieski</option>
          <option value="green">Zielony</option>
          <option value="other">Inny/specjalistyczny</option>
          <option value="inny">Inny/specjalistyczny</option>
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
          htmlFor="info"
          className="block mb-2 px-2 text-sm font-medium text-gray-700"
        >
          Dodatkowe informacje
        </label>
        <textarea
          {...register("info")}
          id="info"
          placeholder="Dodatkowe informacje, uwagi lub zapytania"
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
};

function parseOrderContent(data: Inputs) {
  return Object.freeze({
    email: data.email,
    "numer telefonu": data.phone,
    "rodzaj pieczątki": data.stampType,
    treść: data.content,
    "kolor tuszu": data.color,
    "dodatkowe informacje": data.info ?? "-",
  });
}
