import React from "react";
import { Link } from "react-router-dom";
import { Button, Box, Toolbar } from "@mui/material";
import { routes } from "../../routes";

const NavBar: React.FC = () => {
  return (
    <Toolbar>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button color="inherit" component={Link} to={routes.home}>
          Home
        </Button>
        <Button color="inherit" component={Link} to={routes.login}>
          Login
        </Button>
        <Button color="inherit" component={Link} to={routes.dashboard}>
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to={routes.profile}>
          Profile
        </Button>
        <Button color="inherit" component={Link} to={routes.about}>
          About
        </Button>
        <Button color="inherit" component={Link} to={routes.register}>
          Register
        </Button>
        <Button color="inherit" component={Link} to={routes.demo}>
          Demo
        </Button>
      </Box>
    </Toolbar>
  );
};

export default NavBar;
