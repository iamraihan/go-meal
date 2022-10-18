import React from "react";
import {
  FaMapMarkedAlt,
  FaBiking,
  FaHeart,
  FaHistory,
  FaMoneyBillWave,
} from "react-icons/fa";
import { VscCommentDiscussion, VscSettingsGear } from "react-icons/vsc";

const SideMenus = () => {
  return (
    <div className="px-10">
      <h2 className="text-3xl mb-10 font-bold">
        GoMeal<span className="text-primary">.</span>
      </h2>
      <div className="flex mb-6 gap-3 items-center">
        <p>
          <FaMapMarkedAlt className="w-6 text-secondary"></FaMapMarkedAlt>
        </p>
        <p className="text-secondary font-medium text-lg">Dashboard</p>
      </div>
      <div className="flex mb-6 gap-3 items-center bg-primary px-3 py-2 rounded-lg ">
        <p>
          <FaBiking className="w-6 text-white"></FaBiking>
        </p>
        <p className="text-white font-medium text-lg">Food Order</p>
      </div>
      <div className="flex mb-6 gap-3 items-center">
        <p>
          <FaHeart className="w-6 text-secondary"></FaHeart>
        </p>
        <p className="text-secondary font-medium text-lg">Favorite</p>
      </div>
      <div className="flex mb-6 gap-3 items-center">
        <p>
          <VscCommentDiscussion className="w-6 text-secondary"></VscCommentDiscussion>
        </p>
        <p className="text-secondary font-medium text-lg">Message</p>
      </div>
      <div className="flex mb-6 gap-3 items-center">
        <p>
          <FaHistory className="w-6 text-secondary"></FaHistory>
        </p>
        <p className="text-secondary font-medium text-lg">Order Hisotry</p>
      </div>
      <div className="flex mb-6 gap-3 items-center">
        <p>
          <FaMoneyBillWave className="w-6 text-secondary"></FaMoneyBillWave>
        </p>
        <p className="text-secondary font-medium text-lg">Bills</p>
      </div>
      <div className="flex mb-6 gap-3 items-center">
        <p>
          <VscSettingsGear className="w-6 text-secondary"></VscSettingsGear>
        </p>
        <p className="text-secondary font-medium text-lg">Setting</p>
      </div>
    </div>
  );
};

export default SideMenus;
