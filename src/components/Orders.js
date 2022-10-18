import React from "react";
import { FaStar } from "react-icons/fa";

const Orders = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* card  */}
      <div className=" bg-white rounded-xl p-6">
        <div className="text-center">
          <h5 className="font-bold text-base text-dark mb-3"> order#1</h5>
          <p className="text-secondary text-base mb-3">Nov 11 2021, 18:38PM</p>
          <div className="border-b border-b-text-secondary"></div>
        </div>
        <h5 className="font-semibold text-base text-dark mb-3 text-center mt-3">
          Fast Food Resto
        </h5>
        <div className="flex mt-3  gap-2 mb-3">
          <p className="icon flex items-center">
            <FaStar className="text-primary"></FaStar>
          </p>
          <div className="text-secondary  font-bold">.</div>
          <p className="reviews text-secondary font-semibold">5.0</p>
          <p className="reviews text-secondary font-semibold">1k + Reviews</p>
        </div>
        <div className="border-b border-b-text-secondary"></div>
        <div className="delivery-time flex justify-between mt-3 mb-3">
          <p className="text-secondary">Delivery time</p>
          <p className="text-dark font-semibold">10 Min</p>
        </div>
        <div className="delivery-time flex justify-between mt-3 mb-3">
          <p className="text-secondary">Distance</p>
          <p className="text-dark font-semibold">2.5 km</p>
        </div>
        <div className="border-b border-b-text-secondary"></div>
        <div className="order-menu-header">Order Menu</div>
        <div className="flex mt-3 justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 rounded-md bg-secondary"></div>
            <div className="">
              <h5 className="text-sm font-semibold">Pepperoni Pizza</h5>
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
          <button className="btn-success btn">Completed</button>
        </div>
      </div>
      <div className=" bg-white rounded-xl p-6 border border-primary">
        <div className="text-center">
          <h5 className="font-bold text-base text-dark mb-3"> order#1</h5>
          <p className="text-secondary text-base mb-3">Nov 11 2021, 18:38PM</p>
          <div className="border-b border-b-text-secondary"></div>
        </div>
        <h5 className="font-semibold text-base text-dark mb-3 text-center mt-3">
          Fast Food Resto
        </h5>
        <div className="flex mt-3  gap-2 mb-3">
          <p className="icon flex items-center">
            <FaStar className="text-primary"></FaStar>
          </p>
          <div className="text-secondary  font-bold">.</div>
          <p className="reviews text-secondary font-semibold">5.0</p>
          <p className="reviews text-secondary font-semibold">1k + Reviews</p>
        </div>
        <div className="border-b border-b-text-secondary"></div>
        <div className="delivery-time flex justify-between mt-3 mb-3">
          <p className="text-secondary">Delivery time</p>
          <p className="text-dark font-semibold">10 Min</p>
        </div>
        <div className="delivery-time flex justify-between mt-3 mb-3">
          <p className="text-secondary">Distance</p>
          <p className="text-dark font-semibold">2.5 km</p>
        </div>
        <div className="border-b border-b-text-secondary"></div>
        <div className="order-menu-header">Order Menu</div>
        <div className="flex mt-3 justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 rounded-md bg-secondary"></div>
            <div className="">
              <h5 className="text-sm font-semibold">Pepperoni Pizza</h5>
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
          <button className="btn-primary btn">Completed</button>
        </div>
      </div>
      <div className=" bg-white rounded-xl p-6 ">
        <div className="text-center">
          <h5 className="font-bold text-base text-dark mb-3"> order#1</h5>
          <p className="text-secondary text-base mb-3">Nov 11 2021, 18:38PM</p>
          <div className="border-b border-b-text-secondary"></div>
        </div>
        <h5 className="font-semibold text-base text-dark mb-3 text-center mt-3">
          Fast Food Resto
        </h5>
        <div className="flex mt-3  gap-2 mb-3">
          <p className="icon flex items-center">
            <FaStar className="text-primary"></FaStar>
          </p>
          <div className="text-secondary  font-bold">.</div>
          <p className="reviews text-secondary font-semibold">5.0</p>
          <p className="reviews text-secondary font-semibold">1k + Reviews</p>
        </div>
        <div className="border-b border-b-text-secondary"></div>
        <div className="delivery-time flex justify-between mt-3 mb-3">
          <p className="text-secondary">Delivery time</p>
          <p className="text-dark font-semibold">10 Min</p>
        </div>
        <div className="delivery-time flex justify-between mt-3 mb-3">
          <p className="text-secondary">Distance</p>
          <p className="text-dark font-semibold">2.5 km</p>
        </div>
        <div className="border-b border-b-text-secondary"></div>
        <div className="order-menu-header">Order Menu</div>
        <div className="flex mt-3 justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 rounded-md bg-secondary"></div>
            <div className="">
              <h5 className="text-sm font-semibold">Pepperoni Pizza</h5>
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
          <button className="btn-indigo btn">Completed</button>
        </div>
      </div>
      <div className=" bg-white rounded-xl p-6 ">
        <div className="text-center">
          <h5 className="font-bold text-base text-dark mb-3"> order#1</h5>
          <p className="text-secondary text-base mb-3">Nov 11 2021, 18:38PM</p>
          <div className="border-b border-b-text-secondary"></div>
        </div>
        <h5 className="font-semibold text-base text-dark mb-3 text-center mt-3">
          Fast Food Resto
        </h5>
        <div className="flex mt-3  gap-2 mb-3">
          <p className="icon flex items-center">
            <FaStar className="text-primary"></FaStar>
          </p>
          <div className="text-secondary  font-bold">.</div>
          <p className="reviews text-secondary font-semibold">5.0</p>
          <p className="reviews text-secondary font-semibold">1k + Reviews</p>
        </div>
        <div className="border-b border-b-text-secondary"></div>
        <div className="delivery-time flex justify-between mt-3 mb-3">
          <p className="text-secondary">Delivery time</p>
          <p className="text-dark font-semibold">10 Min</p>
        </div>
        <div className="delivery-time flex justify-between mt-3 mb-3">
          <p className="text-secondary">Distance</p>
          <p className="text-dark font-semibold">2.5 km</p>
        </div>
        <div className="border-b border-b-text-secondary"></div>
        <div className="order-menu-header">Order Menu</div>
        <div className="flex mt-3 justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 rounded-md bg-secondary"></div>
            <div className="">
              <h5 className="text-sm font-semibold">Pepperoni Pizza</h5>
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
          <button className="btn-success btn">Completed</button>
        </div>
      </div>
      <div className=" bg-white rounded-xl p-6 ">
        <div className="text-center">
          <h5 className="font-bold text-base text-dark mb-3"> order#1</h5>
          <p className="text-secondary text-base mb-3">Nov 11 2021, 18:38PM</p>
          <div className="border-b border-b-text-secondary"></div>
        </div>
        <h5 className="font-semibold text-base text-dark mb-3 text-center mt-3">
          Fast Food Resto
        </h5>
        <div className="flex mt-3  gap-2 mb-3">
          <p className="icon flex items-center">
            <FaStar className="text-primary"></FaStar>
          </p>
          <div className="text-secondary  font-bold">.</div>
          <p className="reviews text-secondary font-semibold">5.0</p>
          <p className="reviews text-secondary font-semibold">1k + Reviews</p>
        </div>
        <div className="border-b border-b-text-secondary"></div>
        <div className="delivery-time flex justify-between mt-3 mb-3">
          <p className="text-secondary">Delivery time</p>
          <p className="text-dark font-semibold">10 Min</p>
        </div>
        <div className="delivery-time flex justify-between mt-3 mb-3">
          <p className="text-secondary">Distance</p>
          <p className="text-dark font-semibold">2.5 km</p>
        </div>
        <div className="border-b border-b-text-secondary"></div>
        <div className="order-menu-header">Order Menu</div>
        <div className="flex mt-3 justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 rounded-md bg-secondary"></div>
            <div className="">
              <h5 className="text-sm font-semibold">Pepperoni Pizza</h5>
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
          <button className="btn-success btn">Completed</button>
        </div>
      </div>
      <div className=" bg-white rounded-xl p-6 ">
        <div className="text-center">
          <h5 className="font-bold text-base text-dark mb-3"> order#1</h5>
          <p className="text-secondary text-base mb-3">Nov 11 2021, 18:38PM</p>
          <div className="border-b border-b-text-secondary"></div>
        </div>
        <h5 className="font-semibold text-base text-dark mb-3 text-center mt-3">
          Fast Food Resto
        </h5>
        <div className="flex mt-3  gap-2 mb-3">
          <p className="icon flex items-center">
            <FaStar className="text-primary"></FaStar>
          </p>
          <div className="text-secondary  font-bold">.</div>
          <p className="reviews text-secondary font-semibold">5.0</p>
          <p className="reviews text-secondary font-semibold">1k + Reviews</p>
        </div>
        <div className="border-b border-b-text-secondary"></div>
        <div className="delivery-time flex justify-between mt-3 mb-3">
          <p className="text-secondary">Delivery time</p>
          <p className="text-dark font-semibold">10 Min</p>
        </div>
        <div className="delivery-time flex justify-between mt-3 mb-3">
          <p className="text-secondary">Distance</p>
          <p className="text-dark font-semibold">2.5 km</p>
        </div>
        <div className="border-b border-b-text-secondary"></div>
        <div className="order-menu-header">Order Menu</div>
        <div className="flex mt-3 justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 rounded-md bg-secondary"></div>
            <div className="">
              <h5 className="text-sm font-semibold">Pepperoni Pizza</h5>
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
          <button className="btn-success btn">Completed</button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
