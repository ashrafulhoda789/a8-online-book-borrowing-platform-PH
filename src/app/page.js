import Banner from "@/components/homepage/Banner";
import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import MostBorrowed from "@/components/homepage/MostBorrowed";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedBooks></FeaturedBooks>
      <MostBorrowed></MostBorrowed>
    </div>
  );
}
