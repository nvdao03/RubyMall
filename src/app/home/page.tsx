import Banner from "@/app/home/components/Banner/Banner";
import Categories from "@/app/home/components/Categories/Categories";
import DealPrice from "@/app/home/components/DealPrice/DealPrice";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
    </div>
  );
}
