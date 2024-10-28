import SubCompanyCard from "@/components/admin/SubCompanyCard";
import Card from "@/components/Card";
// import SubCardItems from "@/lib/companycard/SubCardItems";

export default function SubCompanies() {
  return (
    <>
      <div className="space-y-10">
        <div>
          <Card />
        </div>
        <div>
          <SubCompanyCard />
        </div>
      </div>
    </>
  );
}
