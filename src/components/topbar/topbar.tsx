import React from "react";
import "./topbar.scss";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <div className="logo">Kent - Shop</div>
        </div>
        <div className="topbar-right">
          <div className="topbar-icons-container">
            <NotificationsNone />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icons-container">
            <Language />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icons-container">
            <Settings />
          </div>
          <img
            src="https://image.freepik.com/free-vector/love-meal-vector-logo-template_142351-157.jpg"
            alt=""
            className="topbar-avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
