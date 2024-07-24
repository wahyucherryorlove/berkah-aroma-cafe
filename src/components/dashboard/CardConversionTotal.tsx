import { BookMark } from "@components/icons/BookMark";

export function CardConversionTotal() {
  return (
    <div className="w-full bg-neutral-900 px-4 py-3 rounded-md mt-5 ">
      <div className="flex items-center justify-between">
        <h4 className="text-neutral-400">Conversion Rate</h4>
        <i className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-green-400">
          <BookMark className="w-4 h-4 fill-neutral-50" />
        </i>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <h3 className="text-neutral-400 font-bold text-xl">42.012</h3>
        <h6 className="text-neutral-400 text-sm">+6.30%</h6>
      </div>
    </div>
  );
}
