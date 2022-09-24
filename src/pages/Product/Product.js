// import Grid from "@material/Grid";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React from "react";
import { Link } from "react-router-dom";
import SearchTable from "../Component/SearchTable/SearchTable";
export default function Product() {
  return (
    <Grid>
      <Paper
        elevation={3}
        style={{
          marginTop: "2rem",
          minWidth: "100%",
          color: "white",
          background: "#563d7c",
          padding: "2rem",
        }}
      >
        <Link
          style={{
            // alignItems: "center",
            position: "absolute",
            right: "10px",
            textDecoration: "none",
            color: "white",
            border: "1px solid white",
            padding: "1rem",
            marginTop: "-1.6rem",
          }}
          to="/khassbazzar/newproduct"
        >
          Add Product
        </Link>
      </Paper>
      <SearchTable />
    </Grid>
  );
}
