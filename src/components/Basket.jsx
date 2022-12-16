import React from "react";
import {  AiOutlineCoffee} from "react-icons/ai";

import {  FaCoffee } from "react-icons/fa";
import BasketItem from "./BasketItem";

var data = [
  {
    id: 1,
    icon: <AiOutlineCoffee className="coffee--image-icon" />,
    name: "Cafee Latte",
    price: 2.2,
  },
  {
    id: 2,
    icon: <FaCoffee className="coffee--image-icon" />,
    name: "Cartado",
    price: 1.5,
  },
];

const Basket = () => {
  return (
    <div>
      {data.map((item) => {
        return <BasketItem key={item.id} data={item} />;
      })}
    </div>
  );
};

export default Basket;
