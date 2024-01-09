import React from "react";
import help from "../assests/help.png";
import search from "../assests/search.png";
import menu1 from "../assests/menu1.png";
import menu2 from "../assests/menu2.png";
import arrow from "../assests/arrow.png";
import Sort from "../assests/Sort.png";
import download from "../assests/download.png";
import triangle from "../assests/triangle.png";
import info from "../assests/info.png";
import right from "../assests/right.png";
import left from "../assests/left.png";

import Orders from "./Orders.js";

function MainDisplay() {
  return (
    <div className="mainDisplay">
      <div className="top">
        <div className="left">
          <p>Payments</p>
          <div>
            <img src={help} alt="help" />
            How it works
          </div>
        </div>
        <div className="middle">
          <img src={search} alt="search" />
          <input placeholder="Search features, tutorials, etc." />
        </div>
        <div className="right">
          <img src={menu1} alt="menu" />
          <img src={menu2} alt="menu" />
        </div>
      </div>
      <div className="bottom">
        <div className="bottom_top">
          <div className="bottom_top_top">
            <p>Overview</p>
            <div>
              <p>Last Month</p>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div className="bottom_top_bottom">
            <div>
              <p className="title">Online orders</p>
              <p className="cost">231</p>
            </div>
            <div>
              <p className="title">Amount received</p>
              <p className="cost">&#x20B9;23,92,312.19</p>
            </div>
          </div>
        </div>
        <div className="bottom_bottom">
          <div className="bottom_bottom_top">
            <p>Transactions | This Month</p>
          </div>
          {/* search sort downlaod */}
          <div className="bottom_bottom_bottom">
            <div className="bottom_bottom_bottom_top">
              <div className="bottom_bottom_bottom_top_top">
                <div className="right">
                  <img src={search} alt="search" />
                  <input placeholder="Search by order ID..." />
                </div>
                <div className="left">
                  <div>
                    Sort
                    <img src={Sort} alt="sort" />
                  </div>
                  <img src={download} alt="downlaod" />
                </div>
              </div>
              {/* order id order data */}
              <div className="bottom_bottom_bottom_top_bottom">
                <div className="alignLeft">Order ID</div>
                <div className="alignLeft">
                  Order Date <img src={triangle} alt="triangle" />
                </div>
                <div className="alignRight">Order amount</div>
                <div className="alignRight">
                  Transaction fees <img src={info} alt="info" />
                </div>
              </div>
            </div>
            <div>
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              {/* <Orders /> */}
            </div>
            <div className="complete_bottom">
              <div className="previous">
                <img src={right} alt="previous" />
                Previous
              </div>
              <div className="numbers">
                <div>1</div>
                <div>...</div>
                <div className="color">10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
              </div>
              <div className="next">
                Next
                <img src={left} alt="previous" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDisplay;
