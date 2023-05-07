import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
const CartItem = ({ item }) => {
  const [qty, setQty] = useState(1);
  const [items, setItems] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CART,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
      const updatedItems = cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });
      setItems(updatedItems);
      cartDispatch();
    } else if (action === "remove") {
      if (qty === 1) {
        setQty(1);
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setItems(updatedItems);
        cartDispatch();
      } else {
        setQty(qty - 1);
        const updatedItems = cartItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          }
          return item;
        });
        setItems(updatedItems);
        cartDispatch();
      }
    }
  };
  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src={item?.imageURL}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          {parseFloat(item?.price) * qty}
        </p>
      </div>

      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove")}
        >
          <BiMinus className="text-gray-50" />
        </motion.div>
        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {qty}
        </p>
        <motion.div whileTap={{ scale: 0.75 }} onClick={() => updateQty("add")}>
          <BiPlus className="text-gray-50" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
