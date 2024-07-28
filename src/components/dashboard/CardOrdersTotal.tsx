import { useEffect, useState } from "react";

import { Typography } from "@components/shadcn/Typography";

import { RoomServices } from "@components/icons/RoomServices";

export function CardOrdersTotal() {
  const [orders, setOrders] = useState([]);

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
    <div className="w-full bg-neutral-800 px-4 py-3 rounded-md mt-5 group border border-neutral-700">
      <div className="flex items-center justify-between">
        <Typography variant="p2" className="text-neutral-400">
          Orders
        </Typography>
        <i className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 group-hover:scale-110 duration-200">
          <RoomServices className="w-4 h-4 fill-neutral-50" />
        </i>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <Typography variant="p1" className="text-neutral-400" weight="bold">
          {orders.length}
        </Typography>
        <Typography variant="p3" className="text-neutral-400">
          +6.30%
        </Typography>
      </div>
    </div>
  );
}
