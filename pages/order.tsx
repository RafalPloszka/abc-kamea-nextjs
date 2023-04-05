import { OrderForm } from "@/components/OrderForm";
import { ErrorInfo } from "@/components/OrderForm/ErrorInfo";
import { SuccessInfo } from "@/components/OrderForm/SuccessInfo";
import { OrderTutorial } from "@/components/OrderTutorial";
import { GoBackIcon } from "@/components/icons";
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
          <GoBackIcon className="fill-gray-700 inline align-top mr-2" />
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
