import Head from "next/head";
import { useEffect, useState } from "react";
import { Input } from "@components/shadcn/Input";

import { supabase } from "@libs/supabase";

import { BuatKategoriPopup } from "@components/kategori/BuatKategoriPopup";

import { Search } from "@components/icons/Search";

type CategoriTypes = {
  id: number;
  name: string;
};

export default function Categori() {
  const [categori, setCategori] = useState<CategoriTypes[]>([]);

  useEffect(() => {
    async function fetchCategori() {
      const { data, error } = await supabase.from("tbl_categori").select("*");

      if (data) {
        setCategori(data);
      } else if (error) {
        console.log(error);
      }
    }

    fetchCategori();
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
          <h2 className="font-normal text-neutral-400 text-xl">Kategori</h2>
        </div>

        <section className="bg-neutral-800 w-full mt-7 p-4 rounded-md border border-neutral-600 overflow-hidden">
          <div className="flex flex-col mobile:flex-row justify-end gap-4 mobile:items-center">
            <form className="relative flex items-center w-full mobile:w-max">
              <Search className="absolute w-[14px] h-[14px] left-3 fill-neutral-400" />
              <Input
                type="text"
                placeholder="Search..."
                className="bg-neutral-700 border-neutral-600 text-sm outline-none py-2 pl-9 pr-4 rounded-md text-neutral-400 w-full"
              />
            </form>

            <BuatKategoriPopup />
          </div>

          <div className="mt-6 overflow-x-scroll overflow-y-hidden desktop:overflow-hidden w-full">
            <table className="w-[768px] tablet:w-full">
              <thead>
                <tr className="h-10 bg-neutral-200/10 text-neutral-50 text-center text-sm border-b border-neutral-500">
                  <th className="w-[30px]">#</th>
                  <th className="w-[150px]">Nama Kategori</th>
                  <th className="w-[60px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categori.map((item, itemId) => (
                  <tr
                    className="h-14 even:bg-neutral-300/10 text-center"
                    key={itemId}
                  >
                    <td className="text-neutral-300">{itemId + 1}</td>
                    <td className="text-neutral-300 capitalize">{item.name}</td>
                    <td>
                      <button className="text-xs bg-[#FFB200]/10 border border-yellow-600 text-[#FFB200] hover:bg-[#FFB200] hover:text-neutral-950 transition-all px-3 py-1.5 rounded-md">
                        Edit
                      </button>
                      <span className="mx-2 text-neutral-500">||</span>
                      <button className="text-xs bg-[#FF0000]/10 border border-red-600 text-[#FF0000] px-3 py-1.5 rounded-md hover:bg-[#FF0000] hover:text-neutral-50 transition-all">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
