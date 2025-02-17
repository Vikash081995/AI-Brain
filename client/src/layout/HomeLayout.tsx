import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import { Link } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Digital Brain
          </Link>
          <NavBar />
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <Outlet />
        </Box>
      </Container>
      <footer>
        <Box
          mt={4}
          py={2}
          textAlign={"center"}
          style={{
            backgroundColor: "#f5f5f5",
            position: "fixed",
            bottom: "0",
            width: "100%",
          }}
        >
          <Typography variant="body2" color="textSecondary">
            © 2025 Digital Brain. All rights reserved.
          </Typography>
        </Box>
      </footer>
    </div>
  );
}

export default HomeLayout;
