"use client";

import Product from "@/components/Product/Product";

function DealPrice() {
  return (
    <section className="mt-5">
      <div className="custom-container">
        <div className="p-10 bg-white rounded-lg">
          <h3 className="text-[20px] font-semibold text-primary">Deal hời, giá tốt</h3>
          <div className="grid lg:grid-cols-5 mt-7">
            <Product />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DealPrice;
