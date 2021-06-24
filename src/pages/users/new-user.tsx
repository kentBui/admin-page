import React from "react";
import "./new-user.scss";

const NewUser = () => {
  return (
    <div className="new-user">
      <h1 className="new-user-title">New User</h1>
      <form className="new-user-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="qiang412"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            id="fullname"
            placeholder="Kent bui"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="qiang412@email.com"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password-confirm">Password Confirm</label>
          <input
            type="password"
            id="password-confirm"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            placeholder="+84.948880694"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <div className="new-user-gender">
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" name="gender" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="active">Active</label>
          <select id="active" className="new-user-select">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div className="form-group">
          <button className="new-user-btn">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
