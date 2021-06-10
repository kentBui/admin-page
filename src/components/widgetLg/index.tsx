import React from "react";
import WidgetButton from "../shared/widget-button";
import "./widgetLg.scss";
const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <h3 className="widgetLg-title">Latest transactions</h3>
      <table className="widgetLg-table">
        <thead>
          <tr className="widgetLg-tr">
            <th className="widgetLg-th">Customer</th>
            <th className="widgetLg-th">Date</th>
            <th className="widgetLg-th">Amount</th>
            <th className="widgetLg-th">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLg-tr">
            <td className="widgetLg-user">
              <img
                src="https://image.freepik.com/free-photo/beautiful-female-face-perfect-clean-skin-young-caucasian-woman-white-studio-background_155003-34301.jpg"
                alt=""
                className="widgetLg-img"
              />
              <p className="widgetLg-user-name">Kent Bui</p>
            </td>
            <td className="widgetLg-date">2 Jun 2021</td>
            <td className="widgetLg-amount">$122.00</td>
            <td className="widgetLg-status`">
              <WidgetButton type="approved" />
            </td>
          </tr>
          <tr className="widgetLg-tr">
            <td className="widgetLg-user">
              <img
                src="https://image.freepik.com/free-photo/beautiful-female-face-perfect-clean-skin-young-caucasian-woman-white-studio-background_155003-34301.jpg"
                alt=""
                className="widgetLg-img"
              />
              <p className="widgetLg-user-name">Kent Bui</p>
            </td>
            <td className="widgetLg-date">2 Jun 2021</td>
            <td className="widgetLg-amount">$122.00</td>
            <td className="widgetLg-status`">
              <WidgetButton type="pendding" />
            </td>
          </tr>
          <tr className="widgetLg-tr">
            <td className="widgetLg-user">
              <img
                src="https://image.freepik.com/free-photo/beautiful-female-face-perfect-clean-skin-young-caucasian-woman-white-studio-background_155003-34301.jpg"
                alt=""
                className="widgetLg-img"
              />
              <p className="widgetLg-user-name">Kent Bui</p>
            </td>
            <td className="widgetLg-date">2 Jun 2021</td>
            <td className="widgetLg-amount">$122.00</td>
            <td className="widgetLg-status`">
              <WidgetButton type="pendding" />
            </td>
          </tr>
          <tr className="widgetLg-tr">
            <td className="widgetLg-user">
              <img
                src="https://image.freepik.com/free-photo/beautiful-female-face-perfect-clean-skin-young-caucasian-woman-white-studio-background_155003-34301.jpg"
                alt=""
                className="widgetLg-img"
              />
              <p className="widgetLg-user-name">Kent Bui</p>
            </td>
            <td className="widgetLg-date">2 Jun 2021</td>
            <td className="widgetLg-amount">$122.00</td>
            <td className="widgetLg-status`">
              <WidgetButton type="declined" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
