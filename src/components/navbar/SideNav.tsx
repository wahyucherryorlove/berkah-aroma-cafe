import Link from "next/link";

import { Ballot } from "@components/icons/Ballot";
import { GridColumb } from "@components/icons/GridColumb";
import { RoomServices } from "@components/icons/RoomServices";
import { UsersAlt } from "@components/icons/UsersAlt";
import { BookMark } from "@components/icons/BookMark";

export function SideNav() {
  return (
    <ul className="flex flex-col gap-y-2">
      <li>
        <Link
          href=""
          className="flex items-center gap-x-4 py-3 bg-neutral-700 px-4 rounded-md text-neutral-50 font-bold"
        >
          <GridColumb className="w-6 h-6 fill-neutral-50" />
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          href=""
          className="flex items-center gap-x-4 py-3 bg-transparent px-4 rounded-md text-neutral-400"
        >
          <Ballot className="w-6 h-6 fill-neutral-400" />
          Menu
        </Link>
      </li>
      <li>
        <Link
          href=""
          className="flex items-center gap-x-4 py-3 bg-transparent px-4 rounded-md text-neutral-400"
        >
          <RoomServices className="w-6 h-6 fill-neutral-400" />
          Orders
        </Link>
      </li>
      <li>
        <Link
          href=""
          className="flex items-center gap-x-4 py-3 bg-transparent px-4 rounded-md text-neutral-400"
        >
          <UsersAlt className="w-6 h-6 fill-neutral-400" />
          Users
        </Link>
      </li>
      <li>
        <Link
          href=""
          className="flex items-center gap-x-4 py-3 bg-transparent px-4 rounded-md text-neutral-400"
        >
          <BookMark className="w-6 h-6 fill-neutral-400" />
          Report
        </Link>
      </li>
    </ul>
  );
}
