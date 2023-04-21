import React from "react";
import Logo from "./imgs/logo.png";
import { MdShoppingBasket } from "react-icons/md";
import Avatar from "./imgs/avatar.png";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* cho máy tính và tablet */}
      <div className="hidden md:flex w-full h-full  items-center justify-between ">
        <Link  to={'/'}className="flex items-center gap-2 flex-grow">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className=" text-headingColor text-xl font-bold"> Gà Quay </p>
        </Link>
        <div className="flex items-center gap-8 m-5">
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

        <div className="relative flex items-center justify-center ">
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-3 -right-3 ">
            <p className="text-xs text-white font-semibold"> 2</p>
          </div>
        </div>

        <motion.img
          whileTap={{ scale: 0.6 }}
          src={Avatar}
          className="w-10 min-8-[40px] h-10 min-h-[40px] drop-shadow-xl m-5  cursor-pointer "
          alt="avatar"
        />
      </div>

      {/* cho điện thoai */}
      <div className="flex md:hidden h-full"></div>
    </header>
  );
};

export default Header;
