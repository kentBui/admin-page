import React from "react";
import "./feature-info.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeatureInfo = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <h4 className="featured-title">Revanue</h4>
        <div className="featured-money">
          <span className="featured-money-count">$2,415</span>
          <span className="featured-money-rate">
            -11.4 <ArrowDownward />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
      <div className="featured-item">
        <h4 className="featured-title">Sales</h4>
        <div className="featured-money">
          <span className="featured-money-count">$2,415</span>
          <span className="featured-money-rate">
            -1.4 <ArrowDownward />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
      <div className="featured-item">
        <h4 className="featured-title">Cost</h4>
        <div className="featured-money">
          <span className="featured-money-count">$2,235</span>
          <span className="featured-money-rate rate-positive">
            +8.4 <ArrowUpward />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeatureInfo;
