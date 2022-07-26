import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dialog from "../../components/dialog/Dialog";
import { productRows } from "../../dummyData";
import "./productList.css";

export default function ProductList() {
  const [data, setData] = useState(productRows);
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
      description: `You are going to delete ${name}, this is a permanent option, after doing so you will not be able to see Juan again in your list of products`,
      disagree: "Cancel",
      agree: "Accept",
      excecute: () =>
        setData((currentRows) => currentRows.filter((row) => row.id !== id)),
    });
  };

  const columns = [
    { field: "id", headerName: "Id", flex: 1 },
    {
      field: "product",
      headerName: "Product",
      flex: 2,
      renderCell: ({ row }) => {
        const { productImage, name, id } = row;
        return (
          <Link to={`/product/${id}`}>
            <div className="productList">
              <img className="productListImg" src={productImage} alt="" />
              {name}
            </div>
          </Link>
        );
      },
    },
    { field: "stock", headerName: "Stock", flex: 2 },
    { field: "status", headerName: "Status", flex: 2 },
    { field: "price", headerName: "Price", flex: 2 },
    {
      field: "action",
      headerName: "Action",
      flex: 2,
      renderCell: ({ row }) => {
        const { id, name } = row;
        return (
          <div className="userListActions">
            <Link to={`/product/${id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(id, name)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productList">
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
