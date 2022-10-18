import React from "react";
import SideMenus from "../../components/SideMenus";

const OrderMenu = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        {" "}
        <div className="menu max-w-[345px]">
          <SideMenus></SideMenus>
        </div>
        <div className="flex-auto"></div>
      </div>
    </div>
  );
};

export default OrderMenu;
