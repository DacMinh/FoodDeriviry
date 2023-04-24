import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../imgs/logo.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import Avatar from "../imgs/avatar.png";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
  const login = async () => {
    if (!user) {
      const {
        user: {refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-6 px-4 md:p-6 bg-primary">
      {/* cho máy tính và tablet */}
      <div className="hidden md:flex w-full h-full  items-center justify-between ">
        <Link to={"/"} className="flex items-center gap-2 flex-grow">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className=" text-headingColor text-xl font-bold"> Gà Quay </p>
        </Link>
        <div className="flex items-center gap-8 m-5">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li
              className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out "
              onClick={() => setIsMenu(false)}
            >
              Trang chủ
            </li>
            <li
              className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out "
              onClick={() => setIsMenu(false)}
            >
              Danh sách
            </li>
            <li
              className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out "
              onClick={() => setIsMenu(false)}
            >
              Về chúng tôi
            </li>
            <li
              className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out "
              onClick={() => setIsMenu(false)}
            >
              Dịch vụ
            </li>
          </motion.ul>
        </div>

        <div className="relative flex items-center justify-center ">
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-3 -right-3 ">
            <p className="text-xs text-white font-semibold"> 2</p>
          </div>
        </div>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-8-[40px] h-10 min-h-[40px] drop-shadow-xl m-5  cursor-pointer rounded-full"
            alt="avatar"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-17 right-5"
            >
              {user && user.email === "phamdacminh2@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100  transition-all duration-100 ease-in-out text-textColor text-base">
                    Món mới <MdAdd />
                  </p>{" "}
                </Link>
              )}

              <p
                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100  transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Đăng xuất <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* cho điện thoai */}
      <div className="flex md:hidden h-full w-full justify-between items-center">
        <Link to={"/"} className="flex items-center gap-2 flex-grow">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className=" text-headingColor text-xl font-bold"> Gà Quay </p>
        </Link>

        <div className="relative flex items-center justify-center ">
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-3 -right-3 ">
            <p className="text-xs text-white font-semibold"> 2</p>
          </div>
        </div>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-8-[40px] h-10 min-h-[40px] drop-shadow-xl m-5  cursor-pointer rounded-full"
            alt="avatar"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-17 right-5"
            >
              {user && user.email === "phamdacminh2@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100  transition-all duration-100 ease-in-out text-textColor text-base">
                    Món mới <MdAdd />
                  </p>{" "}
                </Link>
              )}
              <ul className="flex  flex-col ">
                <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out hover:bg-slate-100 px-4 py-2 ">
                  Trang chủ
                </li>
                <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out hover:bg-slate-100 px-4 py-2">
                  Danh sách
                </li>
                <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out hover:bg-slate-100 px-4 py-2">
                  Về chúng tôi
                </li>
                <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out hover:bg-slate-100 px-4 py-2">
                  Dịch vụ
                </li>
              </ul>

              <p
                className="px-4 py-2 flex items-center gap-3 cursor-pointer bg-slate-200 hover:bg-slate-300  transition-all duration-100 ease-in-out text-textColor text-base
              m-2 p-2 rounded-md shadow-md"
                onClick={logout}
              >
                Đăng xuất
                <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
