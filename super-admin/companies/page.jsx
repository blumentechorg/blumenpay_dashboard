import CompanyCard from "@/app/dashboard/User/components/CompanyCard";
import Card from "@/app/dashboard/User/components/Card";

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
