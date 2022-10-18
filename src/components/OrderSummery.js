import React from "react";

import {
  VscCommentDiscussion,
  VscLocation,
  VscSettingsGear,
} from "react-icons/vsc";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const OrderSummery = () => {
  return (
    <div>
      <div className="flex justify-between gap-10 mt-3">
        <div className="flex gap-4">
          <div className="flex mt-5 text-2xl">
            <VscCommentDiscussion></VscCommentDiscussion>{" "}
            <sup className="font-bold  text-primary">.</sup>
          </div>
          <div className="flex mt-5 text-2xl">
            <IoIosNotificationsOutline></IoIosNotificationsOutline>{" "}
            <sup className="font-bold  text-primary">.</sup>
          </div>
          <div className="flex mt-5 text-2xl">
            <VscSettingsGear></VscSettingsGear>{" "}
            <sup className="font-bold  text-primary">.</sup>
          </div>
        </div>
        <div className="w-14 h-14 rounded-md bg-secondary"></div>
      </div>
      <h2 className="text-2xl text-dark font-bold mt-8 mb-4">Order Tracker</h2>

      <div>
        <img
          src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
          alt=""
        />
      </div>
      <p
        className="text-secondary text-base mt-4
      "
      >
        your address
      </p>

      <div className="flex items-center gap-4">
        <VscLocation className="text-primary"></VscLocation>
        <h4 className="text-dark text-base font-bold">elm street </h4>
      </div>
      <p
        className="text-secondary text-base mt-4
      "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        repellat.
      </p>

      {/* order summery menu  */}
      <div className="flex mt-3 justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded-md bg-secondary"></div>
          <div className="">
            <h5 className="text-sm font-semibold">Cheese Burger</h5>
            <p className="text-secondary text-sm">xl</p>
          </div>
        </div>
        <div className="ml-10 flex items-center">
          <p className="text-dark font-bold">
            +<span className="text-primary">$</span>5.59
          </p>
        </div>
      </div>
      <div className="flex mt-3 justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded-md bg-secondary"></div>
          <div className="">
            <h5 className="text-sm font-semibold">Cheese Burger</h5>
            <p className="text-secondary text-sm">xl</p>
          </div>
        </div>
        <div className="ml-10 flex items-center">
          <p className="text-dark font-bold">
            +<span className="text-primary">$</span>5.59
          </p>
        </div>
      </div>
      <div className="flex mt-3 justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded-md bg-secondary"></div>
          <div className="">
            <h5 className="text-sm font-semibold">Cheese Burger</h5>
            <p className="text-secondary text-sm">xl</p>
          </div>
        </div>
        <div className="ml-10 flex items-center">
          <p className="text-dark font-bold">
            +<span className="text-primary">$</span>5.59
          </p>
        </div>
      </div>
      <div className="border-b border-b-text-secondary mt-3"></div>
      <div className="flex justify-between">
        <h5 className="order-menu-header">Total</h5>
        <p className="order-menu-header">
          <span className="text-primary">$</span>202.00
        </p>
      </div>
      <div className="mt-5">
        <button className="btn btn-primary">Delivering to you</button>
      </div>

      <Link className="" to="/menu">
        <button className="btn btn-primary mt-16">Second Page</button>
      </Link>
    </div>
  );
};

export default OrderSummery;
