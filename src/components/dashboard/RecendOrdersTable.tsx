import Image from "next/image";

import { Eye } from "@components/icons/Eye";
import { PenClip } from "@components/icons/PenClip";
import { Trash } from "@components/icons/Trash";

export function RecendOrdersTable() {
  return (
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
        <tr className="h-14">
          <td className="text-center text-neutral-400 text-sm">#1123</td>
          <td className="flex items-center gap-x-4 h-14 text-sm">
            <div className="relative w-10 h-10">
              <Image
                src="/images/menu/calabrese-scramble.jpg"
                alt="Makanan or Minuman"
                className="object-cover  rounded-md"
                fill
              />
            </div>
            <h6 className="text-neutral-50">Makanan Enak</h6>
          </td>
          <td className="text-center text-neutral-400 text-sm">2</td>
          <td className="text-center text-neutral-400 text-sm">Rp 25.000</td>
          <td className="text-center text-neutral-400 text-sm">25 Jul 2024</td>
          <td className="text-center">
            <span className="text-xs px-3 py-1.5 bg-green-600 rounded-full font-semibold text-neutral-50">
              Completed
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
      </tbody>
    </table>
  );
}
