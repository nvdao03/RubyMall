import Link from "next/link";

interface PropTypes {
  handleCloseForm: () => void;
}

export default function LoginForm({ handleCloseForm }: PropTypes) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,_0,_0,_0.60)] flex justify-center items-center z-[20]">
      <div className="bg-white max-w-[375px] py-8 px-6 rounded-lg relative">
        <span className="text-[20px] font-medium leading-[1.5]">Đăng nhập hoặc đăng ký để tiếp tục</span>
        <form className="my-7">
          <div className="w-full rounded-[999px] bg-[#F2F2F2]">
            <input
              type="text"
              placeholder="Email hoặc số điện thoại"
              className="text-[16px] text-[#333333] py-[10px] px-[14px] rounded-[999px] placeholder:font-light"
            />
          </div>
          <div className="w-full rounded-[999px] bg-[#F2F2F2] mt-5">
            <input
              type="password"
              placeholder="Mật khẩu"
              className="text-[16px] text-[#333333] py-[10px] px-[14px] rounded-[999px] placeholder:font-light"
            />
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-x-[6px]">
              <input type="checkbox" id="password" />
              <label htmlFor="password" className="font-normal text-[14px] leading-[40px] text-[#333333]">
                Ghi nhớ đăng nhập
              </label>
            </div>
            <Link href={""} className="font-normal text-primary leading-[40px]">
              Quên mật khẩu
            </Link>
          </div>
          <div className="flex justify-center items-center mt-3">
            <button className="w-full py-[13px] px-[10px] bg-primary text-white rounded-[999px] border border-solid border-primary">
              Đăng nhập
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <span className="text-[14px] font-normal">Hoặc đăng nhập bằng</span>
          <div className="flex justify-center items-center mt-5 gap-x-4">
            <button className="flex items-center gap-x-2 py-2 px-[14px] border border-solid border-[#BDBDBD] rounded-[999px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path
                  d="M18.6712 8.868H18V8.83341H10.5V12.1667H15.2095C14.5225 14.1072 12.6762 15.5001 10.5 15.5001C7.73871 15.5001 5.49996 13.2613 5.49996 10.5001C5.49996 7.73883 7.73871 5.50008 10.5 5.50008C11.7745 5.50008 12.9341 5.98091 13.817 6.76633L16.1741 4.40925C14.6858 3.02216 12.695 2.16675 10.5 2.16675C5.89788 2.16675 2.16663 5.898 2.16663 10.5001C2.16663 15.1022 5.89788 18.8334 10.5 18.8334C15.102 18.8334 18.8333 15.1022 18.8333 10.5001C18.8333 9.94133 18.7758 9.39591 18.6712 8.868Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.12744 6.62133L5.86536 8.62925C6.60619 6.79508 8.40036 5.50008 10.4999 5.50008C11.7745 5.50008 12.9341 5.98091 13.817 6.76633L16.1741 4.40925C14.6858 3.02216 12.6949 2.16675 10.4999 2.16675C7.29911 2.16675 4.52327 3.97383 3.12744 6.62133Z"
                  fill="#FF3D00"
                />
                <path
                  d="M10.5 18.8334C12.6525 18.8334 14.6084 18.0096 16.0871 16.67L13.508 14.4875C12.6432 15.1452 11.5865 15.5009 10.5 15.5C8.33255 15.5 6.49213 14.118 5.7988 12.1892L3.0813 14.283C4.46047 16.9817 7.2613 18.8334 10.5 18.8334Z"
                  fill="#4CAF50"
                />
                <path
                  d="M18.6712 8.86784H18V8.83325H10.5V12.1666H15.2096C14.8809 13.0901 14.2889 13.8971 13.5067 14.4878L13.5079 14.487L16.0871 16.6695C15.9046 16.8353 18.8333 14.6666 18.8333 10.4999C18.8333 9.94117 18.7758 9.39575 18.6712 8.86784Z"
                  fill="#1976D2"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center gap-x-2 py-2 px-[14px] border border-solid border-[#BDBDBD] rounded-[999px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path
                  d="M20.5611 10.5611C20.5611 5.00455 16.0566 0.5 10.5 0.5C4.94345 0.5 0.438904 5.00455 0.438904 10.5611C0.438904 15.5829 4.11813 19.7453 8.92797 20.5V13.4694H6.37339V10.5611H8.92797V8.34452C8.92797 5.82296 10.4301 4.43012 12.7282 4.43012C13.829 4.43012 14.9804 4.62663 14.9804 4.62663V7.10261H13.7117C12.4619 7.10261 12.0721 7.87818 12.0721 8.67387V10.5611H14.8625L14.4164 13.4694H12.0721V20.5C16.8819 19.7453 20.5611 15.5829 20.5611 10.5611Z"
                  fill="#1877F2"
                />
              </svg>
              Facebook
            </button>
          </div>
          <div className="flex justify-center items-center gap-x-[7px] text-[14px] font-normal mt-5">
            <span>Bạn chưa có tài khoản</span>
            <Link href={"/register"} className="text-primary hover:underline">
              Đăng ký
            </Link>
          </div>
        </div>
        <button
          onClick={handleCloseForm}
          className="flex justify-center items-center rounded-[999px] bg-white p-[15px] absolute -top-5 -right-5 shadow-[3px_2px_12px_0px_rgba(0,0,0,0.10)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M18.8036 16.947C19.0502 17.1935 19.1887 17.528 19.1887 17.8767C19.1887 18.2254 19.0502 18.5598 18.8036 18.8063C18.557 19.0529 18.2226 19.1914 17.8739 19.1914C17.5252 19.1914 17.1908 19.0529 16.9442 18.8063L10 11.8599L3.05361 18.8042C2.80704 19.0507 2.47262 19.1892 2.12392 19.1892C1.77522 19.1892 1.4408 19.0507 1.19423 18.8042C0.947664 18.5576 0.809143 18.2232 0.809143 17.8745C0.809143 17.5258 0.947664 17.1913 1.19423 16.9448L8.14064 10.0006L1.19642 3.05415C0.949851 2.80758 0.811331 2.47316 0.811331 2.12446C0.811331 1.77576 0.949851 1.44135 1.19642 1.19478C1.44299 0.948208 1.77741 0.809687 2.12611 0.809687C2.47481 0.809687 2.80923 0.948208 3.05579 1.19478L10 8.14118L16.9464 1.19368C17.193 0.947114 17.5274 0.808594 17.8761 0.808594C18.2248 0.808594 18.5592 0.947114 18.8058 1.19368C19.0524 1.44025 19.1909 1.77467 19.1909 2.12337C19.1909 2.47207 19.0524 2.80649 18.8058 3.05306L11.8594 10.0006L18.8036 16.947Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
