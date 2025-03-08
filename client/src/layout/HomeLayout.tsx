import { Outlet } from "react-router-dom";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Footer from "../components/Footer/Footer";
import { Container, Box } from "@mui/material";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import SidebarDrawer from "../components/Sidebar/Sidebar";

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

function HomeLayout() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SidebarDrawer handleDrawerClose={handleDrawerClose} open={open} />
      <Main open={open}>
        <HeaderBar open={open} handleDrawerOpen={handleDrawerOpen} />
        <Container>
          <Box my={4}>
            <Outlet />
          </Box>
        </Container>
        <Footer />
      </Main>
    </>
  );
}

export default HomeLayout;
