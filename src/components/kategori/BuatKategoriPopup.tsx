import { useState } from "react";
import { useRouter } from "next/router";

import {
  Dialog,
  DialogOverlay,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@components/shadcn/Dialog";
import { Input } from "@components/shadcn/Input";
import Swal from "sweetalert2";

export function BuatKategoriPopup() {
  const [name, setName] = useState<string>("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch("/api/categori/insertCategori", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    const result = await res.json();

    if (res.ok) {
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "success",
      }).then(router.reload);
    } else {
      alert(`Data ${result.error} Gagal di Tambah`);
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="text-sm font-bold text-neutral-50 px-4 py-2 rounded-md bg-[#74512D] hover:bg-[#543310] transition-all">
        Buat Kategori
      </DialogTrigger>
      <DialogOverlay className="bg-neutral-800/20 px-4">
        <DialogContent className="bg-neutral-900 min-h-52 rounded-lg py-10 border border-neutral-700 ">
          <DialogHeader className="">
            <DialogTitle className="text-neutral-50">
              Buat Kategori Baru
            </DialogTitle>

            <DialogDescription className="flex flex-col items-start">
              <form
                className="mt-4 flex flex-col items-start w-full gap-y-2"
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor="kategoriName"
                  className="text-neutral-400 font-normal"
                >
                  Nama Kategori :
                </label>
                <Input
                  type="text"
                  id="kategoriName"
                  className="py-2 px-4 rounded-md w-full outline-none border border-neutral-800 bg-neutral-700 text-neutral-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  type="submit"
                  className="text-sm font-bold text-neutral-50 px-4 py-2 rounded-md bg-[#74512D] hover:bg-[#543310] transition-all w-full mt-1"
                >
                  Submit
                </button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
