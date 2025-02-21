import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import { Link } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", height: "8vh" }}
      >
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
            backgroundColor: "black",
            position: "fixed",
            bottom: "0",
            width: "100%",
          }}
        >
          <Typography variant="body2" color="white">
            © 2025 Digital Brain. All rights reserved.
          </Typography>
        </Box>
      </footer>
    </div>
  );
}

export default HomeLayout;
