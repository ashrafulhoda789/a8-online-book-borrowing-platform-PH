import Banner from "@/components/homepage/Banner";
import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import MemberShipPlans from "@/components/homepage/MemberShipPlans";
import MostBorrowed from "@/components/homepage/MostBorrowed";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedBooks></FeaturedBooks>
       <div className="mb-10 divider"></div>
      <MostBorrowed></MostBorrowed>
      <MemberShipPlans></MemberShipPlans>
    </div>
  );
}
