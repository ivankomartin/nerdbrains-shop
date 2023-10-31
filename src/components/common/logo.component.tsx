import React from "react";
import { Link } from "react-router-dom";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";

const Logo: React.FC = () => {
  return (
    <Link
      to="/"
      style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
    >
      <DiamondOutlinedIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default Logo;
