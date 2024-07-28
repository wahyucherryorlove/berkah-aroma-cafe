import { Typography } from "@components/shadcn/Typography";

import { Wallet } from "@components/icons/Wallet";

export function CardRevenueTotal() {
  return (
    <div className="w-full bg-neutral-800 px-4 py-3 rounded-md mt-5 group border border-neutral-700">
      <div className="flex items-center justify-between">
        <Typography variant="p2" className="text-neutral-400">
          Revenue
        </Typography>
        <i className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-110 duration-200">
          <Wallet className="w-4 h-4 fill-neutral-50" />
        </i>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <Typography variant="p1" className="text-neutral-400" weight="bold">
          Rp 30.000
        </Typography>
        <Typography variant="p3" className="text-neutral-400">
          +6.30%
        </Typography>
      </div>
    </div>
  );
}
