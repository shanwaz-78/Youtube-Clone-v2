import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../utils/constants";
import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        zIndex : 10,
        backgroundColor : '#1e1e1e'
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={42} />
      </Link>

      <SearchBar />
    </Stack>
  );
}

export default Navbar;
