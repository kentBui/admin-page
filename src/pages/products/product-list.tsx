import "./product-list.scss";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { DeleteOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { productList } from "../../dataset/productList";

const ProductList = () => {
  const [data, setData] = useState(productList);
  console.log(data);

  const handleDelete = (id: string) => {
    const tempData = data.filter((item) => item.id !== id);
    setData(tempData);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="image">
            <img src={params.row.image} alt={params.row.productName} />
            <div className="image-name">{params.row.productName}</div>
          </div>
        );
      },
    },
    {
      field: "desc",
      headerName: "Description",
      width: 230,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 160,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="btn-edit">
                Edit
                {/* <Edit /> */}
              </button>
            </Link>
            <button
              className="btn-delete"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteOutlined />
            </button>
          </>
        );
      },
    },
  ];
  return (
    <div className="product-list" style={{ height: 400, width: "100%" }}>
      <h2 className="user-list-title">Product List</h2>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
