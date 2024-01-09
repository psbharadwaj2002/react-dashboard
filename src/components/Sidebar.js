import React from "react";
import logo from "../assests/logo.png";
import down from "../assests/down.png";
import bottom from "../assests/bottom.png";
import home from "../assests/sidebar/home.png";
import orders from "../assests/sidebar/Navbar IconOrders icon.png";
import products from "../assests/sidebar/Navbar IconProducts icon.png";
import delivery from "../assests/sidebar/VectorDelivery icon.png";
import market from "../assests/sidebar/VectorMarketing icon.png";
import ana from "../assests/sidebar/VectorAnalytics icon.png";
import pay from "../assests/sidebar/VectorPayments.png";
import tools from "../assests/sidebar/VectorTools icon.png";
import disc from "../assests/sidebar/VectorDiscounts icon.png";
import aud from "../assests/sidebar/VectorAudience icon.png";
import app from "../assests/sidebar/VectorAppearance icon.png";
import plug from "../assests/sidebar/VectorPlugins icon.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="right">
          <img src={logo} alt="logo" />
          <div className="title">
            <p>Nishyam</p>
            <a href="/">Visit Store</a>
          </div>
        </div>
        <div className="left">
          <img src={down} alt="down" />
        </div>
      </div>
      <div className="middle">
        <button>
          <img src={home} alt="home" />
          Home
        </button>
        <button>
          <img src={orders} alt="home" />
          Orders
        </button>
        <button>
          <img src={products} alt="home" />
          Products
        </button>
        <button>
          <img src={delivery} alt="home" />
          Delivery
        </button>
        <button>
          <img src={market} alt="home" />
          Marketing
        </button>
        <button>
          <img src={ana} alt="home" />
          Analytics
        </button>
        <button className="active">
          <img src={pay} alt="home" />
          Payments
        </button>
        <button>
          <img src={tools} alt="home" />
          Tools
        </button>
        <button>
          <img src={disc} alt="home" />
          Discounts
        </button>
        <button>
          <img src={aud} alt="home" />
          Audience
        </button>
        <button>
          <img src={app} alt="home" />
          Appearance
        </button>
        <button>
          <img src={plug} alt="home" />
          Plugins
        </button>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={bottom} alt="bottom" />
        </div>
        <div className="right">
          <div className="bottom_title">Available Credits</div>
          <div className="credit">222.10</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
