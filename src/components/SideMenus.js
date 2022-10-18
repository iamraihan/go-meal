import React from "react";

const SideMenus = () => {
  return (
    <div>
      <h2 className="text-3xl mb-10">
        GoMeal<span className="text-yellow-400 font-bold">.</span>
      </h2>
      <div className="flex mb-3">
        <p>dashboard icon</p>
        <p className="text-gray-300 font-bold">Dashboard</p>
      </div>
      <div className="flex mb-3">
        <p>dashboard icon</p>
        <p className="text-gray-300 font-bold">Food Order</p>
      </div>
      <div className="flex mb-3">
        <p>dashboard icon</p>
        <p className="text-gray-300 font-bold">Favorite</p>
      </div>
      <div className="flex mb-3">
        <p>dashboard icon</p>
        <p className="text-gray-300 font-bold">Message</p>
      </div>
      <div className="flex mb-3">
        <p>dashboard icon</p>
        <p className="text-gray-300 font-bold">Order History</p>
      </div>
      <div className="flex mb-3">
        <p>dashboard icon</p>
        <p className="text-gray-300 font-bold">Bills</p>
      </div>
      <div className="flex mb-3">
        <p>dashboard icon</p>
        <p className="text-gray-300 font-bold">Setting</p>
      </div>
    </div>
  );
};

export default SideMenus;
