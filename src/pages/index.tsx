import Head from "next/head";

import { CardCustomersTotal } from "@components/dashboard/CardCustomersTotal";
import { CardConversionTotal } from "@components/dashboard/CardConversionTotal";
import { CardOrdersTotal } from "@components/dashboard/CardOrdersTotal";
import { CardRevenueTotal } from "@components/dashboard/CardRevenueTotal";
import { RecendOrdersTable } from "@components/dashboard/RecendOrdersTable";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Berkah Aroma Cafe Makassar" />
        <meta name="keywords" content="Berkah Aroma Cafe" />
        <meta name="author" content="Wahyu Van Zitter" />
        <title>Dashboard - Berkah Aroma Cafe</title>
        <link rel="icon" href="/images/logo-icon.png" />
      </Head>
      <main className="wide:ml-[300px] px-4 wide:mr-8 mt-24">
        <div>
          <h2 className="font-normal text-neutral-400 text-xl">Dashboard</h2>
        </div>

        <section className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-4 gap-4">
          <CardRevenueTotal />
          <CardCustomersTotal />
          <CardOrdersTotal />
          <CardConversionTotal />
        </section>

        <section className="bg-neutral-800 w-full mt-10 p-4 rounded-md border border-neutral-600 overflow-hidden">
          <h4 className="text-neutral-300 font-semibold">Recend Orders</h4>

          <div className="mt-4 overflow-x-scroll overflow-y-hidden desktop:overflow-hidden w-full">
            <RecendOrdersTable />
          </div>
        </section>
      </main>
    </>
  );
}
