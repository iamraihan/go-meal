import React from "react";
import Orders from "./Orders";
import OrderSummery from "./OrderSummery";
import SearchBar from "./SearchBar";
import SideMenus from "./SideMenus";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="menu max-w-[345px]">
          <SideMenus></SideMenus>
        </div>
        <div className="order flex-auto bg-[#F5F5F5] px-6">
          <div className="flex py-5 justify-between flex-col md:flex-row">
            <div>
              <h2 className="text-3xl font-bold">Food Order</h2>
            </div>
            <div>
              <SearchBar></SearchBar>
            </div>
          </div>
          <div>
            <Orders></Orders>
          </div>
        </div>
        <div className="order-summery max-w-[289px] mx-auto px-6">
          <OrderSummery></OrderSummery>
        </div>
      </div>
    </div>
  );
};

export default Home;
