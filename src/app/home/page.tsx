import Banner from "@/app/home/components/Banner/Banner";
import Categories from "@/app/home/components/Categories/Categories";
import Header from "@/components/Header/Header";
import LoginForm from "@/components/LoginForm/LoginForm";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
    </div>
  );
}
