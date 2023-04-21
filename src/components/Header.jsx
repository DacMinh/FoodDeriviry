import React from "react";
import Logo from "./imgs/logo.png";
import { MdShoppingBasket } from "react-icons/md";

const Header = () => {
  return (
    <div className="fixed z-50 w-screen p-6 px-16">
      {/* cho máy tính và tablet */}
      <div className="hidden md:flex w-full h-full  items-center justify-between ">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className=" text-headingColor text-xl font-bold"> Gà Quay </p>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out ">
              Trang chủ
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out ">
              Danh sách
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out ">
              Về chúng tôi
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out ">
              Dịch vụ
            </li>
          </ul>
        </div>

        <div className="relative flex items-center justify-center  ">
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-1 -right-3 ">
            <p className="text-xs text-white font-semibold"> 2</p>
          </div>
        </div>
      </div>
      {/* cho điện thoai */}
      <div className="flex md:hidden h-full"></div>
    </div>
  );
};

export default Header;
