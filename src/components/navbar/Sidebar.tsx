import Image from "next/image";

import { SideNav } from "./SideNav";

import LogoImages from "@images/logo-icon.png";

export function Sidebar() {
  return (
    <aside className="fixed top-0 h-full bg-neutral-900 w-[270px] px-5">
      <div className="flex items-center gap-x-4 py-8">
        <Image src={LogoImages} alt="Logo" className="w-14 object-contain" />

        <h3 className="text-neutral-50 text-xl font-bold uppercase">
          BERKAH AROMA CAFE
        </h3>
      </div>

      <SideNav />
    </aside>
  );
}
