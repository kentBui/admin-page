import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./user.scss";

const User = () => {
  return (
    <div className="user">
      <div className="user-header">
        <h1 className="user-title">Edit User</h1>
        <Link to="/new-user">
          <button className="user-add-btn">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="user-show-header">
            <img
              src="https://picsum.photos/id/6/200/300"
              alt=""
              className="user-show-img"
            />
            <div className="user-show-title">
              <h4 className="user-show-username">Kent bui</h4>
              <p className="user-show-text">Software engineer</p>
            </div>
          </div>

          <div className="user-show-content">
            <h4 className="user-show-detail">Account Details</h4>
            <div className="user-show-info">
              <PermIdentity />
              <p className="user-show-info-text">qiang412</p>
            </div>
            <div className="user-show-info">
              <CalendarToday />
              <p className="user-show-info-text">08.12.1987</p>
            </div>
            <div className="user-show-info">
              <PhoneAndroid />
              <p className="user-show-info-text">+84.948880694</p>
            </div>
            <div className="user-show-info">
              <MailOutline />
              <p className="user-show-info-text">qiang412@email.com</p>
            </div>
            <div className="user-show-info">
              <LocationSearching />
              <p className="user-show-info-text">Ha noi</p>
            </div>
          </div>
        </div>
        <div className="user-update">
          <h4 className="user-update-title">Edit</h4>
          <form className="user-update-form">
            <div className="form-left">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value="qiang412"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullname">Fullname</label>
                <input
                  type="text"
                  id="fullname"
                  value="Kent bui"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="birthday">Birthday</label>
                <input
                  type="date"
                  id="birthday"
                  value="08/12/1987"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  value="+84.948880694"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value="qiang412@email.com"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  value="Ha noi"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-right">
              <div className="user-update-upload">
                <img
                  src="https://picsum.photos/id/7/200/300"
                  alt=""
                  className="user-update-img"
                />
                <label htmlFor="upload" className="upload-icon">
                  <Publish />
                </label>
                <input type="file" id="upload" style={{ display: "none" }} />
              </div>
              <button className="user-update-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
