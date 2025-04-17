import React from "react";

export default function Banner() {
  return (
    <section className="mb-[28px] mt-[100px] sm:mt-[116px]">
      <div className="custom-container">
        <div className="flex items-center gap-x-3">
          <div>
            <img src="../../../../../assets/imgs/home/banner-main.svg" alt="" />
          </div>
          <div className="hidden sm:block">
            <img src="../../../../../assets/imgs/home/banner-sub-one.svg" alt="" />
          </div>
          <div className="hidden md:block">
            <img src="../../../../../assets/imgs/home/banner-sub-three.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
