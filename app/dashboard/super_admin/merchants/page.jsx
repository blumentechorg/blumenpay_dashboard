import { PagaCard, PaystackCard } from "@/components/MerchantCard";

export default function page() {
  return (
    <>
      <div className="flex gap-x-10">
        <PagaCard />
        <PaystackCard />
      </div>
    </>
  );
}
