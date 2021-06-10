import React from "react";
import Chart from "../../components/chart";
import FeatureInfo from "../../components/feature-info";
import WidgetLg from "../../components/widgetLg";
import WidgetSm from "../../components/widgetSm";
import { userData } from "../../dataset/users";

import "./home.scss";

const HomePage = () => {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart
        title="Users Analytics"
        data={userData}
        dataKey="Active user"
        grid
      />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default HomePage;
