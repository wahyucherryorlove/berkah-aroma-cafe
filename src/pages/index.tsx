import Head from "next/head";
import { useEffect, useState } from "react";

import { CardCustomersTotal } from "@components/dashboard/CardCustomersTotal";
import { CardConversionTotal } from "@components/dashboard/CardConversionTotal";
import { CardOrdersTotal } from "@components/dashboard/CardOrdersTotal";
import { CardRevenueTotal } from "@components/dashboard/CardRevenueTotal";
import { RecendOrdersItem } from "@components/dashboard/RecendOrdersItem";

type MenuType = {
  id: number;
  name: string;
  price: number;
  images: string;
};

type OrdersType = {
  id: number;
  id_user: number;
  id_menu: number;
  status: boolean;
  tbl_menu: MenuType;
};

export default function Home() {
  const [orders, setOrders] = useState<OrdersType[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      const res = await fetch("/api/getOrders");
      const data = await res.json();

      if (res.ok) {
        setOrders(data);
      }
    }

    fetchOrders();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Berkah Aroma Cafe Makassar" />
        <meta name="keywords" content="Berkah Aroma Cafe" />
        <meta name="author" content="Wahyu Van Zitter" />
        <title>Berkah Aroma Cafe</title>
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
            <table className="w-[1024px] desktop:w-full">
              <thead>
                <tr className="h-10 bg-neutral-200/10 text-neutral-50 text-center text-sm border-b border-neutral-500">
                  <th className="w-[80px]">#ID</th>
                  <th className="w-[260px]">Menu</th>
                  <th className="w-[100px]">Quantity</th>
                  <th className="w-[120px]">Price</th>
                  <th className="w-[120px]">Date</th>
                  <th className="w-[120px]">Status</th>
                  <th className="w-[100px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <RecendOrdersItem
                    key={order.id}
                    index={order.id}
                    userId={order.id_user}
                    statusOrder={order.status}
                    nameDish={order.tbl_menu.name}
                    price={order.tbl_menu.price}
                    images={order.tbl_menu.images}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
