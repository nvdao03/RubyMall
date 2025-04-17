import RatingStar from "@/components/RatingStar/RatingStar";

function Product() {
  return (
    <div className="rounded-lg border border-solid border-[#E0E0E0]">
      <div className="w-full pt-[100%] relative">
        <img
          className="absolute top-0 left-0 bg-white w-full h-full object-cover rounded-lg"
          src="../../../assets/imgs/home/product-test.svg"
          alt=""
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-x-[10px]">
          <div className="bg-[#E32C41] rounded-[999px] inline-flex items-center gap-x-1 p-[9px]">
            <img className="" src="../../../assets/imgs/home/sale.svg" alt="" />
            <span className="text-[13px] font-normal text-white">Giảm giá</span>
          </div>
          <div className="p-[9px] text-[13px] font-medium inline-flex items-center justify-center bg-[#F2F2F2] text-[#4F4F4F] rounded-[999px]">
            <span>-85%</span>
          </div>
        </div>
        <h4 className="my-[14px] text-[14px] line-clamp-3 leading-[22px]">
          Máy Massage Mắt VISPO VP-M21P - Mát Xa Túi Khí Kết Hợp Nhiệt Ấm, Giảm Nhức Mỏi Mắt
        </h4>
        <div className="flex items-center">
          <RatingStar />
          <span className="text-[12px] ml-[7px]">5 bình luận</span>
        </div>
        <div className="flex items-center gap-x-3 mt-4">
          <span>450.000 đ</span>
          <span className="text-[14px] font-medium text-[#828282] truncate line-through">85.000 đ</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
