import React from "react";
import Orders from "./Orders";
import SearchBar from "./SearchBar";
import SideMenus from "./SideMenus";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <div className="menu max-w-sm">
          <SideMenus></SideMenus>
        </div>
        <div className="order flex-auto bg-[#F5F5F5] px-6">
          <div className="flex py-5">
            <div>
              <h2>Food Order</h2>
            </div>
            <div>
              <SearchBar></SearchBar>
            </div>
          </div>
          <div>
            <Orders></Orders>
          </div>
        </div>
        <div className="order-summery max-w-sm"></div>
      </div>
    </div>
  );
};

export default Home;
