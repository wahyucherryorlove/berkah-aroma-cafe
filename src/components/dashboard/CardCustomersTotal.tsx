import { UsersAlt } from "@components/icons/UsersAlt";

export function CardCustomersTotal() {
  return (
    <div className="w-full bg-neutral-900 px-4 py-3 rounded-md mt-5 ">
      <div className="flex items-center justify-between">
        <h4 className="text-neutral-400">Customers</h4>
        <i className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-800 to-blue-500">
          <UsersAlt className="w-4 h-4 fill-neutral-50" />
        </i>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <h3 className="text-neutral-400 font-bold text-xl">42.012</h3>
        <h6 className="text-neutral-400 text-sm">+6.30%</h6>
      </div>
    </div>
  );
}
