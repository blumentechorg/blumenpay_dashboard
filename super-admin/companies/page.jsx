import CompanyCard from "@/components/CompanyCard";
import Card from "@/components/Card";

export default function Companies() {
  return (
    <div className="space-y-10">
      <div>
        <Card />
      </div>
      <div>
        <CompanyCard />
      </div>
    </div>
  );
}
