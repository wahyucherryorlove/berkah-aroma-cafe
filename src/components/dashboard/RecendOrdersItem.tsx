import Image from "next/image";

import { Eye } from "@components/icons/Eye";
import { PenClip } from "@components/icons/PenClip";
import { Trash } from "@components/icons/Trash";

interface RecendOrdersItemProps {
  index: number;
  userId: number;
  nameDish: string;
  price: number;
  statusOrder: boolean;
}

export function RecendOrdersItem({
  index = 0,
  userId = 0,
  nameDish = "",
  price = 0,
  statusOrder = false,
}: RecendOrdersItemProps) {
  const rupiah = new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
  return (
    <tr className="h-14 even:bg-neutral-300/10" key={index}>
      <td className="text-center text-neutral-400 text-sm">{"#" + userId}</td>
      <td className="flex items-center gap-x-4 h-14 text-sm">
        <div className="relative w-10 h-10">
          <Image
            src="/images/menu/calabrese-scramble.jpg"
            alt="Makanan or Minuman"
            className="object-cover  rounded-md"
            fill
          />
        </div>
        <h6 className="text-neutral-50">{nameDish}</h6>
      </td>
      <td className="text-center text-neutral-400 text-sm">2</td>
      <td className="text-center text-neutral-400 text-sm">{rupiah}</td>
      <td className="text-center text-neutral-400 text-sm">25 Jul 2024</td>
      <td className="text-center">
        <span
          className={`${
            statusOrder ? "bg-green-600 text-neutral-50" : "bg-yellow-500"
          } text-xs px-3 py-1.5 rounded-full font-semibold`}
        >
          {statusOrder ? "Completed" : "Process"}
        </span>
      </td>
      <td className="text-center ">
        <button type="button">
          <Eye className="w-4 fill-violet-700" />
        </button>
        <button type="button" className="mx-4">
          <PenClip className="w-4 fill-amber-600" />
        </button>
        <button type="button">
          <Trash className="w-4 fill-red-500" />
        </button>
      </td>
    </tr>
  );
}
