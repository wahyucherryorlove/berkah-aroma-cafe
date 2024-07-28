import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/shadcn/Accordion";

import { Ballot } from "@components/icons/Ballot";
import { BookMark } from "@components/icons/BookMark";
import { Boxes } from "@components/icons/Boxes";
import { BoxesOpen } from "@components/icons/BoxesOpen";
import { GridColumb } from "@components/icons/GridColumb";
import { ListCheck } from "@components/icons/ListCheck";
import { RoomServices } from "@components/icons/RoomServices";
import { UsersAlt } from "@components/icons/UsersAlt";
import { UserTag } from "@components/icons/UserTag";
import { Cashier } from "@components/icons/Cashier";

export function SideNav() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-y-2">
      <li>
        <Link
          href="/"
          className={`${
            pathname === "/"
              ? "bg-neutral-700 text-neutral-50 font-bold"
              : "bg-transparent text-neutral-400 font-normal"
          } flex items-center gap-x-4 py-3 px-4 rounded-md`}
        >
          <GridColumb
            className={`${
              pathname === "/" ? "fill-neutral-50" : "fill-neutral-400"
            } w-6 h-6`}
          />
          Dashboard
        </Link>
      </li>
      <li>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="px-4">
            <AccordionTrigger className="gap-x-4 text-neutral-400 py-3 w-full">
              <Boxes className={`fill-neutral-400 w-6 h-6`} />
              Master Data
            </AccordionTrigger>
            <AccordionContent className="p-4 flex flex-col gap-y-6">
              <Link
                href="/categori"
                className={`${
                  pathname === "/categori"
                    ? "text-neutral-50 font-bold"
                    : "text-neutral-400 font-normal"
                } flex items-center gap-x-4 rounded-md`}
              >
                <ListCheck
                  className={`${
                    pathname === "/categori"
                      ? "fill-neutral-50"
                      : "fill-neutral-400"
                  } w-6 h-6`}
                />
                Kategori
              </Link>
              <Link
                href=""
                className={`${
                  pathname === "/menu"
                    ? "text-neutral-50 font-bold"
                    : "text-neutral-400 font-normal"
                } flex items-center gap-x-4 rounded-md`}
              >
                <Ballot
                  className={`${
                    pathname === "/menu"
                      ? "fill-neutral-50"
                      : "fill-neutral-400"
                  } w-6 h-6`}
                />
                Menu
              </Link>
              <Link
                href=""
                className={`${
                  pathname === "/users"
                    ? "text-neutral-50 font-bold"
                    : "text-neutral-400 font-normal"
                } flex items-center gap-x-4 rounded-md`}
              >
                <UsersAlt
                  className={`${
                    pathname === "/users"
                      ? "fill-neutral-50"
                      : "fill-neutral-400"
                  } w-6 h-6`}
                />
                Pengguna
              </Link>
              <Link
                href=""
                className={`${
                  pathname === "/customers"
                    ? "text-neutral-50 font-bold"
                    : "text-neutral-400 font-normal"
                } flex items-center gap-x-4 rounded-md`}
              >
                <UserTag
                  className={`${
                    pathname === "/customers"
                      ? "fill-neutral-50"
                      : "fill-neutral-400"
                  } w-6 h-6`}
                />
                Pelanggan
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </li>
      <li>
        <Link
          href=""
          className={`${
            pathname === "/stocks"
              ? "bg-neutral-700 text-neutral-50 font-bold"
              : "bg-transparent text-neutral-400 font-normal"
          } flex items-center gap-x-4 py-3 px-4 rounded-md`}
        >
          <BoxesOpen
            className={`${
              pathname === "/stock" ? "fill-neutral-50" : "fill-neutral-400"
            } w-6 h-6`}
          />
          Stock
        </Link>
      </li>
      <li>
        <Link
          href=""
          className={`${
            pathname === "/cashier"
              ? "bg-neutral-700 text-neutral-50 font-bold"
              : "bg-transparent text-neutral-400 font-normal"
          } flex items-center gap-x-4 py-3 px-4 rounded-md`}
        >
          <Cashier
            className={`${
              pathname === "/cashier" ? "fill-neutral-50" : "fill-neutral-400"
            } w-6 h-6`}
          />
          Kasir
        </Link>
      </li>
      <li>
        <Link
          href=""
          className={`${
            pathname === "/orders"
              ? "bg-neutral-700 text-neutral-50 font-bold"
              : "bg-transparent text-neutral-400 font-normal"
          } flex items-center gap-x-4 py-3 px-4 rounded-md`}
        >
          <RoomServices
            className={`${
              pathname === "/order" ? "fill-neutral-50" : "fill-neutral-400"
            } w-6 h-6`}
          />
          Orders
        </Link>
      </li>

      <li>
        <Link
          href=""
          className={`${
            pathname === "/report"
              ? "bg-neutral-700 text-neutral-50 font-bold"
              : "bg-transparent text-neutral-400 font-normal"
          } flex items-center gap-x-4 py-3 px-4 rounded-md`}
        >
          <BookMark
            className={`${
              pathname === "/report" ? "fill-neutral-50" : "fill-neutral-400"
            } w-6 h-6`}
          />
          Report
        </Link>
      </li>
    </ul>
  );
}
