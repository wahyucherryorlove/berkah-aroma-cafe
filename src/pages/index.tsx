import { CardCustomersTotal } from "@components/dashboard/CardCustomersTotal";
import { CardConversionTotal } from "@components/dashboard/CardConversionTotal";
import { CardOrdersTotal } from "@components/dashboard/CardOrdersTotal";
import { CardRevenueTotal } from "@components/dashboard/CardRevenueTotal";

export default function Home() {
  return (
    <main className="wide:ml-[300px] px-4 wide:mr-8 mt-24">
      <div>
        <h2 className="font-normal text-neutral-400 text-xl">Dashboard</h2>
      </div>

      <section className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-4 gap-4">
        <CardRevenueTotal />
        <CardCustomersTotal />
        <CardOrdersTotal />
        <CardConversionTotal />
      </section>
    </main>
  );
}
