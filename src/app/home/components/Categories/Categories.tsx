import Link from "next/link";

function Categories() {
  return (
    <div className="mt-[48px]">
      <div className="custom-container">
        <h3 className="text-[16px] font-medium md:font-semibold sm:text-[20px]">Danh mục nổi bật</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-7 gap-[15px] md:gap-[30px]">
          <Link href={""} className="rounded-lg bg-[#F5F5FA] p-4">
            <span className="text-[12px] sm:text-[16px] font-medium mb-4 sm:font-semibold block">Điện thoại</span>
            <img className="w-full" src="../../../../../assets/imgs/home/phone.svg" alt="" />
          </Link>
          <Link href={""} className="rounded-lg bg-[#F5F5FA] p-4">
            <span className="text-[12px] sm:text-[16px] font-medium mb-4 sm:font-semibold block">Áo thun</span>
            <img className="w-full" src="../../../../../assets/imgs/home/clothes.svg" alt="" />
          </Link>
          <Link href={""} className="rounded-lg bg-[#F5F5FA] p-4">
            <span className="text-[12px] sm:text-[16px] font-medium mb-4 sm:font-semibold block">Đồng hồ</span>
            <img className="w-full" src="../../../../../assets/imgs/home/watch.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
