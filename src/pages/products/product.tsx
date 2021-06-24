import React from "react";
import { Link } from "react-router-dom";
import { productList } from "../../dataset/productList";
import "./product.scss";
import Chart from "../../components/chart";
import { Publish } from "@material-ui/icons";

const Product = () => {
  return (
    <div className="product">
      <div className="product-header">
        <h1 className="product-title">Edit product</h1>
        <Link to="/new-product">
          <button className="product-add-btn">Create</button>
        </Link>
      </div>
      <div className="product-container">
        <div className="product-top">
          <div className="product-chart">
            <Chart
              title="Products Analytics"
              data={productList}
              dataKeyX="productName"
              dataKeyLine="stock"
              grid
            />
          </div>
          <div className="product-info">
            <div className="product-info-header">
              <img
                src="https://picsum.photos/id/8/200/300"
                alt=""
                className="product-info-img"
              />
              <p className="product-info-text">Iphone 1</p>
            </div>
            <div className="product-info-content">
              <div className="product-info-item">
                <p className="product-info-item-key">Id:</p>
                <p className="product-info-item-value">123</p>
              </div>
              <div className="product-info-item">
                <p className="product-info-item-key">Sales:</p>
                <p className="product-info-item-value">3252</p>
              </div>
              <div className="product-info-item">
                <p className="product-info-item-key">Active:</p>
                <p className="product-info-item-value">Yes</p>
              </div>
              <div className="product-info-item">
                <p className="product-info-item-key">In stock:</p>
                <p className="product-info-item-value">No</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-bottom">
          <form className="product-form">
            <div className="form-left">
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  value="iphone 1"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="in-stock">In stock</label>
                <select
                  className="form-select"
                  name="in-stock"
                  value="yes"
                  id="in-stock"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="active">Active</label>
                <select
                  className="form-select"
                  value="yes"
                  name="active"
                  id="active"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="form-right">
              <div className="product-update-upload">
                <img
                  src="https://picsum.photos/id/7/200/300"
                  alt=""
                  className="product-update-img"
                />
                <label htmlFor="upload" className="upload-icon">
                  <Publish />
                </label>
                <input type="file" id="upload" style={{ display: "none" }} />
              </div>
              <button className="product-update-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
