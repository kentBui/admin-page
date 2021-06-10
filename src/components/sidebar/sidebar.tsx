import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  SportsSoccer,
  AttachMoney,
  Equalizer,
  MailOutline,
  FolderOpen,
  ChatBubbleOutline,
  LocalMall,
  ShowChart,
  Report,
} from "@material-ui/icons";
import "./sidebar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <LineStyle />
              Home
            </li>
            <li className="sidebar-list-item">
              <Timeline />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <Person />
              Users
            </li>
            <li className="sidebar-list-item">
              <SportsSoccer />
              Products
            </li>
            <li className="sidebar-list-item">
              <AttachMoney />
              Trabsactions
            </li>
            <li className="sidebar-list-item">
              <Equalizer />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <MailOutline />
              Mails
            </li>
            <li className="sidebar-list-item">
              <FolderOpen />
              Feedback
            </li>
            <li className="sidebar-list-item">
              <ChatBubbleOutline />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <LocalMall />
              Manager
            </li>
            <li className="sidebar-list-item">
              <ShowChart />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <Report />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
