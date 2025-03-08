import { Toolbar, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";


type HeaderBarProps = {
  handleDrawerOpen: () => void;
  open: boolean;
};
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

function HeaderBar({ handleDrawerOpen, open }: HeaderBarProps) {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "black", height: "8vh" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              mr: 2,
            },
            open && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        AI Brain
        </Link>
        <NavBar />
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
