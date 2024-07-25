import { Wallet } from "@components/icons/Wallet";

export function CardRevenueTotal() {
  return (
    <div className="w-full bg-neutral-800 px-4 py-3 rounded-md mt-5 group border border-neutral-700">
      <div className="flex items-center justify-between">
        <h4 className="text-neutral-400">Revenue</h4>
        <i className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-110 duration-200">
          <Wallet className="w-4 h-4 fill-neutral-50" />
        </i>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <h3 className="text-neutral-400 font-bold text-xl">Rp 30.000</h3>
        <h6 className="text-neutral-400 text-sm">+6.30%</h6>
      </div>
    </div>
  );
}
