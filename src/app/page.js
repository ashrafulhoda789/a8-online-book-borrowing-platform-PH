import Banner from "@/components/homepage/Banner";
import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedBooks></FeaturedBooks>
    </div>
  );
}
