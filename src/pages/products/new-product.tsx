import React from "react";
import "./new-product.scss";

const NewProduct = () => {
  return (
    <div className="new-product">
      <h1 className="new-product-title">New product</h1>
      <form className="new-product-form">
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" />
        </div>
        <div className="form-group">
          <label htmlFor="productname">Product name</label>
          <input
            type="text"
            id="productname"
            placeholder="iphone 1"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            placeholder="some text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            id="stock"
            placeholder="123"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="active">Active</label>
          <select className="form-select" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <button className="new-product-btn">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
