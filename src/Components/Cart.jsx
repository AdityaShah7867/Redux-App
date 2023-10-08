import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators, actionCreators } from "../State/index";
import { useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch);
  const balance = useSelector(state => state.amount)


  return (
    <div>
      <div class="flex flex-col bg-white rounded-3xl mx-2 my-2 border-2 border-black mt-5">
        <div class="px-6 py-8 sm:p-10 sm:pb-6">
          <div class="grid items-center justify-center w-full grid-cols-1 text-left">
            <div>
              <h2 class="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                CART ITEM
              </h2>
              <p class="mt-2 text-sm text-gray-500">
                U dont know but u need it
              </p>
            </div>
            <div class="mt-6">
              <p>
                <span class="text-5xl font-light tracking-tight text-black">
                  Cost : 25 
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex px-6 pb-8 sm:px-8">
          <p className="cursor-pointer bg-green-400 border p-2 text-2xl" onClick={()=> {depositMoney()}}>+</p>
          &nbsp; ADD OR REDEUCE Balance  &nbsp;
          <p className="cursor-pointer bg-red-400 border p-2 text-2xl"  onClick={() =>{ withdrawMoney()}} >-</p>
        </div>
      </div>
      <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Account Balance</div>
    <p class="text-gray-700 text-base">
      Updated Balance : <b> {balance} </b>
    </p>
  </div>
</div>

    </div>
  );
};

export default Cart;
