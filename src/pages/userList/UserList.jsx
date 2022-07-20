import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dialog from "../../components/dialog/Dialog";
import { dataTable } from "../../dummyData";
import "./userList.css";

export default function UserList() {
  const [data, setData] = useState(dataTable);
  const [openDialog, setOpenDialog] = useState(false);
  const [contentDialog, setContentDialog] = useState({
    title: "",
    description: "",
    agree: "",
    disagree: "",
  });

  const handleDelete = (id, name) => {
    setOpenDialog(true);
    setContentDialog({
      title: `Delete ${name}`,
      description: `You are going to delete ${name}, this is a permanent option, after doing so you will not be able to see Juan again in your list of users`,
      disagree: "Cancel",
      agree: "Accept",
      excecute: () => setData(data.filter((item) => item.id !== id)),
    });
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "username",
      headerName: "Username",
      flex: 2,
      renderCell: ({ row }) => {
        const { avatar, username, id } = row;
        return (
          <Link to={`/user/${id}`}>
            <div className="userListUser">
              <img className="userListImg" src={avatar} alt="" />
              {username}
            </div>
          </Link>
        );
      },
    },
    { field: "email", headerName: "Email", flex: 2 },
    { field: "status", headerName: "Status", flex: 2 },
    { field: "transaction", headerName: "Transaction Volume", flex: 2 },
    {
      field: "action",
      headerName: "Action",
      flex: 2,
      renderCell: ({ row }) => {
        const { id, username } = row;
        return (
          <div className="userListActions">
            <Link to={`/user/${id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(id, username)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <h3 className="userListTitle">User List</h3>
      <Dialog
        params={{
          open: openDialog,
          setOpen: setOpenDialog,
          content: contentDialog,
        }}
      />
      <DataGrid
        style={{
          height: "90%",
        }}
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
