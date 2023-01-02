import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { products } from "../assets/products/products.json";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "PRODUCTO", width: 250 },
  { field: "status", headerName: "STATUS", width: 130 },
  { field: "cobrado", headerName: "PAGO", width: 130 },
  { field: "comprador", headerName: "COMPRADOR", width: 130 },
  { field: "price", headerName: "PRECIO", width: 130 },
];

const rows = products.map((product) => {
  return {
    id: product.id,
    comprador: product.comprador || null,
    status: product.status,
    cobrado: product.cobrado || null,
    price: product.price?.toLocaleString("de-DE"),
    name: product.name,
  };
});

export default function Dash() {
  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
