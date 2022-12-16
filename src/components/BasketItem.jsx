import React, { useEffect, useState } from "react";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import Select from "react-select";

const sizeOptions = [
  { value: 0, label: "Small" },
  { value: 0.5, label: "Medium" },
  { value: 1, label: "Large" },
];

const extras = [
  { value: 1, label: "Chocolate" },
  { value: 1.1, label: "Cream" },
  { value: 1.2, label: "Ice-cream" },
];
const syrup = [
  { value: 1, label: "Almond" },
  { value: 1.1, label: "Torani" },
  { value: 1.2, label: "Monin Vanilla" },
  { value: 1.3, label: "Caramel " },
  { value: 1.4, label: "Cinnamon Dolce" },
];

const BasketItem = (props) => {
  const { data } = props;

  const [selectedSizeOptions, setSelectedSizeOptions] = useState({
    value: 0,
    label: "Small",
  });
  const [selectedExtrasOptions, setselectedExtrasOptions] = useState({
    value: 0,
    label: "Nothing",
  });
  const [selectedSyrupOptions, setselectedSyrupOptions] = useState({
    value: 0,
    label: "Nothing",
  });
  let [coffeeCount, setCoffeeCount] = useState(1);
  let [price, setPrice] = useState(1);

  const clearBasket = () => {
    setSelectedSizeOptions({ value: 0, label: "Small" });
    setselectedExtrasOptions({ value: 0, label: "Nothing" });
    setselectedSyrupOptions({ value: 0, label: "Nothing" });
    setCoffeeCount(1);
  };
  const incrementCoffee = () => {
    setCoffeeCount(++coffeeCount);
  };
  const decrementCoffee = () => {
    setCoffeeCount(--coffeeCount);
  };
  useEffect(() => {
    if (coffeeCount < 1) {
      setCoffeeCount(1);
    }

    setPrice(
      (
        data.price * coffeeCount +
        selectedSizeOptions?.value +
        selectedExtrasOptions?.value +
        selectedSyrupOptions?.value
      ).toFixed(2)
    );
  }, [
    selectedSizeOptions,
    selectedExtrasOptions,
    selectedSyrupOptions,
    coffeeCount,
  ]);

  return (
    <div>
      <div className="container">
        <div className="coffee--image">
          <>{data.icon} </>
        </div>
        <div className="coffee--text">
          <span> {data.name}</span>
          <Select
            defaultValue={selectedSizeOptions}
            options={sizeOptions}
            onChange={setSelectedSizeOptions}
          />
          <Select
            defaultValue={selectedExtrasOptions}
            options={extras}
            onChange={setselectedExtrasOptions}
          />
          <Select
            defaultValue={selectedSyrupOptions}
            options={syrup}
            onChange={setselectedSyrupOptions}
          />
        </div>
        <div className="coffee--price">
          <span className="coffee--price-amount">
            {" "}
            <small> ( {data.price} )</small> {price}
          </span>
          <span>
            {selectedSizeOptions.value ? selectedSizeOptions.value : 0}
          </span>
          <span>
            {selectedExtrasOptions.value ? selectedExtrasOptions.value : 0}
          </span>
          <span>
            {selectedSyrupOptions.value ? selectedSyrupOptions.value : 0}
          </span>
        </div>
        <div className="coffee--operations">
          <BsFillPencilFill />
          <FaTrash onClick={clearBasket} />
        </div>
        <div className="counter">
          <button className="counter--arrow-inc">
            <AiFillCaretUp
              className="counter--icon"
              onClick={incrementCoffee}
            />
          </button>
          <input
            type="number"
            className="counter--output"
            min="0"
            value={coffeeCount}
          />
          <button className="counter--arrow-dec">
            <AiFillCaretDown
              className="counter--arrow-icon"
              onClick={decrementCoffee}
            />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default BasketItem;
