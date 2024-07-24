import Image from "next/image";

import { ArrowBottom } from "@components/icons/ArrowBottom";
import { Bell } from "@components/icons/Bell";
import { Light } from "@components/icons/Light";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-[#181818] h-[70px] items-center flex justify-end gap-x-6 px-14">
      <button type="button">
        <Light className="w-5 h-5 fill-neutral-200" />
      </button>
      <div>
        <button type="button" className="flex">
          <Bell className="w-5 h-5 fill-neutral-200" />
        </button>
      </div>
      <button type="button" className="flex items-center gap-x-3">
        <div className="relative w-9 h-9">
          <Image
            src="/images/users/profil1.png"
            alt="Users Profile"
            className="object-contain rounded-full"
            fill
          />
        </div>

        <div className="flex gap-x-2 items-center">
          <h5 className="text-sm font-normal text-neutral-50">Wahyudi Umar</h5>
          <ArrowBottom className="w-4 h-4 mt-1 fill-neutral-50" />
        </div>
      </button>
    </header>
  );
}
