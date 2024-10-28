import UserSubCompanyCard from "@/components/user/UserCompanyCard";
import Card from "@/components/Card";

export default function SubCompanies() {
  return (
    <div className="space-y-10">
      <div>
        <Card />
      </div>
      <div>
        <UserSubCompanyCard />
      </div>
    </div>
  );
}
