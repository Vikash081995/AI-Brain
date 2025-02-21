import React from "react";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { NavbarConfigType } from "../../types/Navbar";
import { NavbarConfig } from "../../config/NavbarConfig";

const NavBar: React.FC = () => {
  return (
    <Box
      sx={{
        width: "70%",
        padding: "8px 0",
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: { xs: 1, sm: 2 },
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "space-between" },
          padding: { xs: 1, sm: 2 },
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {NavbarConfig.map((item: NavbarConfigType) => {
          return (
            <Button
              sx={{
                color: "white",
                minWidth: { xs: "100px", sm: "auto" },
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
              component={Link}
              to={item.path}
            >
              {item.label}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default NavBar;
