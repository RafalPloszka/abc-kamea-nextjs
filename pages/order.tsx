import { OrderForm } from "@/components/OrderForm";
import { ErrorInfo } from "@/components/OrderForm/ErrorInfo";
import { SuccessInfo } from "@/components/OrderForm/SuccessInfo";
import { OrderTutorial } from "@/components/OrderTutorial";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export type OrderStatus = "pending" | "success" | "error";

export default function Order() {
  const [orderStatus, setOrderStatus] = useState<OrderStatus>("pending");
  return (
    <>
      <Head>
        <title>ABC Kamea - Pieczątki Gorzów Wlkp.</title>
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <Link href="/" className="absolute top-2 left-2 sm:top-4 sm:left-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            className="fill-gray-700 inline align-top mr-2"
          >
            <path d="M8 19q-.425 0-.713-.288Q7 18.425 7 18t.287-.712Q7.575 17 8 17h6.1q1.575 0 2.737-1Q18 15 18 13.5T16.837 11q-1.162-1-2.737-1H7.8l1.9 1.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L4.7 9.7q-.15-.15-.213-.325Q4.425 9.2 4.425 9t.062-.375Q4.55 8.45 4.7 8.3l3.6-3.6q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L7.8 8h6.3q2.425 0 4.163 1.575Q20 11.15 20 13.5q0 2.35-1.737 3.925Q16.525 19 14.1 19Z" />
          </svg>
          <span className="text-gray-700">Powrót</span>
        </Link>
        <OrderTutorial />
        {orderStatus === "pending" ? (
          <OrderForm setOrderStatus={setOrderStatus} />
        ) : null}
        {orderStatus === "success" ? <SuccessInfo /> : null}
        {orderStatus === "error" ? <ErrorInfo /> : null}
      </div>
    </>
  );
}
