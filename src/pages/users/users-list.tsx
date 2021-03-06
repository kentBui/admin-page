import React, { useState } from "react";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import "./users-list.scss";
import { DeleteOutlined, Edit } from "@material-ui/icons";
import { userList } from "../../dataset/userlist";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [data, setData] = useState(userList);

  const handleDelete = (id: string) => {
    const tempData = data.filter((item) => item.id !== id);
    setData(tempData);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="avatar">
            <img src={params.row.avatar} alt={params.row.username} />
            <div className="avatar-name">{params.row.username}</div>
          </div>
        );
      },
    },
    // { field: "username", headerName: "UserName", width: 130 },
    {
      field: "email",
      headerName: "Email",
      width: 130,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
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
    <div className="user-list" style={{ height: 400, width: "100%" }}>
      <h2 className="user-list-title">User List</h2>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UsersList;
