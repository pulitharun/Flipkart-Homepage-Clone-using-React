import React from "react";
import { Card, Typography } from "@mui/material";
import Logo from "../../assets/logo.png";
import "./header.css";
import Searchbar from "../../common/search";
import Popover from '@mui/material/Popover';
import AccountMenu from "../../common/account";

const Header = () => {
  return (
    <div>
      <Card
        sx={{
          borderRadius: 0,
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignment: "center",
          gap:8,
        }}>

        <img src={Logo} alt="logo" className="header_logo" />
        <Searchbar />
        <AccountMenu/>
      </Card>
    </div>
  );
};

export default Header;
