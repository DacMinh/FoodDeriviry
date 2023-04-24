import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
const RowContainer = ({ flag, data }) => {
  return (
    <div
      className={`w-full my-12 ${
        flag ? "overflow-scroll" : "overflow-x-hidden"
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-300 md:w-350   h-auto bg-cardOverlay rounded-lg my-12 backdrop-blur-lg p-2 hover:drop-shadow-xl "
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileTap={{ scale: 1.2 }}
                src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-c95ea.appspot.com/o/imgaes%2F1682302466627-i7.png?alt=media&token=820c8725-4b8d-4ed6-8822-6c0e84cfe636"
                className="w-40 -mt-8 drop-shadow-2xl"
                alt=""
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col gap-4 items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                Kem dâu
              </p>
              <p className="mt-1 text-sm text-gray-500">45 Calories</p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  25000 <span className="text-sm text-red-500">VND</span>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
