import Link from "next/link";

export default function Header() {
  return (
    <header className=" py-[20px] fixed w-full top-0 left-0 z-[10]">
      <div className="custom-container">
        <nav className="flex items-center">
          {/* Toogle */}
          <button className="md:hidden mr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.94824 6H20.0512C20.5732 6 21.0002 6.427 21.0002 6.949V7.051C21.0002 7.573 20.5732 8 20.0512 8H3.94824C3.42624 8 3.00024 7.573 3.00024 7.051V6.949C3.00024 6.427 3.42624 6 3.94824 6ZM20.0512 11H3.94824C3.42624 11 3.00024 11.427 3.00024 11.949V12.051C3.00024 12.573 3.42624 13 3.94824 13H20.0512C20.5732 13 21.0002 12.573 21.0002 12.051V11.949C21.0002 11.427 20.5732 11 20.0512 11ZM20.0512 16H3.94824C3.42624 16 3.00024 16.427 3.00024 16.949V17.051C3.00024 17.573 3.42624 18 3.94824 18H20.0512C20.5732 18 21.0002 17.573 21.0002 17.051V16.949C21.0002 16.427 20.5732 16 20.0512 16Z"
                fill="#000"
              />
            </svg>
          </button>
          {/* Logo */}
          <Link href={"/"} className="ml-auto sm:ml-0">
            <img src="../../../assets/imgs/home/logo.svg" alt="Logo" />
          </Link>
          {/* Form */}
          <form className="hidden sm:flex items-center ml-5 px-5 py-3 rounded-[999px] bg-[#F2F2F2] w-full md:w-[350px] lg:w-[400px]">
            <button className="pr-[10px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path
                  d="M19.5071 20.154L13.2451 13.892C12.7451 14.318 12.1701 14.6477 11.5201 14.881C10.8701 15.1144 10.2167 15.231 9.56008 15.231C7.95875 15.231 6.60341 14.6767 5.49408 13.568C4.38474 12.4587 3.83008 11.1037 3.83008 9.50304C3.83008 7.90238 4.38408 6.54671 5.49208 5.43604C6.60074 4.32471 7.95541 3.76904 9.55608 3.76904C11.1574 3.76904 12.5134 4.32371 13.6241 5.43304C14.7347 6.54238 15.2901 7.89804 15.2901 9.50004C15.2901 10.1947 15.1671 10.867 14.9211 11.517C14.6744 12.167 14.3511 12.723 13.9511 13.185L20.2131 19.446L19.5071 20.154ZM9.56008 14.23C10.8867 14.23 12.0071 13.7734 12.9211 12.86C13.8344 11.9467 14.2911 10.8264 14.2911 9.49904C14.2911 8.17238 13.8344 7.05238 12.9211 6.13904C12.0077 5.22571 10.8877 4.76904 9.56108 4.76904C8.23441 4.76904 7.11408 5.22571 6.20008 6.13904C5.28674 7.05238 4.83008 8.17238 4.83008 9.49904C4.83008 10.8257 5.28674 11.9457 6.20008 12.859C7.11341 13.7724 8.23341 14.23 9.56008 14.23Z"
                  fill="#828282"
                />
              </svg>
            </button>
            <input type="text" placeholder="Tìm kiếm sản phẩm " className="text-[#828282] font-normal" />
          </form>
          {/* Notification */}
          <div className="flex items-center gap-x-5 ml-auto">
            <button className="items-center gap-x-2 hover:text-primary transition-all duration-200 ease-in-out hidden lg:flex">
              <svg
                className="hover:fill-primary transition-all duration-200 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M8.25 21C9.07843 21 9.75 20.3284 9.75 19.5C9.75 18.6716 9.07843 18 8.25 18C7.42157 18 6.75 18.6716 6.75 19.5C6.75 20.3284 7.42157 21 8.25 21Z"
                  fill="currentColor"
                />
                <path
                  d="M18.75 21C19.5784 21 20.25 20.3284 20.25 19.5C20.25 18.6716 19.5784 18 18.75 18C17.9216 18 17.25 18.6716 17.25 19.5C17.25 20.3284 17.9216 21 18.75 21Z"
                  fill="currentColor"
                />
                <path
                  d="M21.4125 5.66156C21.3071 5.53268 21.1744 5.42888 21.0239 5.35769C20.8734 5.2865 20.709 5.24971 20.5425 5.25H6.27609L5.98875 3.61969C5.95811 3.44603 5.86726 3.28872 5.73216 3.17539C5.59706 3.06206 5.42634 2.99996 5.25 3H2.25C2.05109 3 1.86032 3.07902 1.71967 3.21967C1.57902 3.36032 1.5 3.55109 1.5 3.75C1.5 3.94891 1.57902 4.13968 1.71967 4.28033C1.86032 4.42098 2.05109 4.5 2.25 4.5H4.62094L6.76125 16.6303C6.79189 16.804 6.88274 16.9613 7.01784 17.0746C7.15294 17.1879 7.32366 17.25 7.5 17.25H19.5C19.6989 17.25 19.8897 17.171 20.0303 17.0303C20.171 16.8897 20.25 16.6989 20.25 16.5C20.25 16.3011 20.171 16.1103 20.0303 15.9697C19.8897 15.829 19.6989 15.75 19.5 15.75H8.12906L7.86469 14.25H19.1925C19.4526 14.2497 19.7046 14.1595 19.9058 13.9947C20.1071 13.8299 20.2452 13.6007 20.2969 13.3458L21.6469 6.59578C21.6794 6.43242 21.6753 6.26388 21.6347 6.10232C21.5942 5.94076 21.5183 5.79022 21.4125 5.66156Z"
                  fill="currentColor"
                />
              </svg>
              Giỏ hàng
            </button>
            <button className="items-center gap-x-2 hover:text-primary transition-all duration-200 ease-in-out hidden xl:flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 19V20H3V19L5 17V11C5 7.9 7.03 5.17 10 4.29V4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4V4.29C16.97 5.17 19 7.9 19 11V17L21 19ZM14 21C14 21.5304 13.7893 22.0391 13.4142 22.4142C13.0391 22.7893 12.5304 23 12 23C11.4696 23 10.9609 22.7893 10.5858 22.4142C10.2107 22.0391 10 21.5304 10 21"
                  fill="currentColor"
                />
              </svg>
              Thông báo
            </button>
          </div>
          {/* Action */}
          <div className="items-center ml-6 gap-x-3 hidden md:flex">
            <button className="px-[25px] py-[10px] border border-solid rounded-[999px] border-primary text-primary">
              Đăng ký
            </button>
            <button className="px-[25px] py-[10px] border text-white border-solid rounded-[999px] bg-primary border-primary hover:opacity-80 transition-all duration-200 ease-in-out">
              Đăng nhập
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
