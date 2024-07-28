import { Typography } from "@components/shadcn/Typography";

import { BookMark } from "@components/icons/BookMark";

export function CardConversionTotal() {
  return (
    <div className="w-full bg-neutral-800 px-4 py-3 rounded-md mt-5 group border border-neutral-700">
      <div className="flex items-center justify-between">
        <Typography variant="p2" className="text-neutral-400">
          Conversion Rate
        </Typography>
        <i className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-green-400 group-hover:scale-110 duration-200">
          <BookMark className="w-4 h-4 fill-neutral-50" />
        </i>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <Typography variant="p1" className="text-neutral-400" weight="bold">
          0%
        </Typography>
        <Typography variant="p3" className="text-neutral-400">
          +6.30%
        </Typography>
      </div>
    </div>
  );
}
