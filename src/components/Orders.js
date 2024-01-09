import React from "react";
import data from "../data/data";

function Orders() {
  return (
    <div className="orders">
      <div className="color">{data.id}</div>
      <div>{data.date}</div>
      <div className="alignRight">&#x20B9;{data.amount}</div>
      <div className="alignRight">{data.transaction}</div>
    </div>
  );
}

export default Orders;
