import React, { useContext } from "react";
import "./Header.css";
import { StoreContext } from "../../Context/StoreContext";

const Header = () => {

  const { menu, setMenu } = useContext(StoreContext);

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <a href="#explore-menu">
          <button
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            View Menu
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
