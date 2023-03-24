import { Menu } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  styled,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";
import ViewLayoutSwitcher from "./ViewLayoutSwitcher";

interface HeaderProps {
  handleMenuClick: () => void;
}

const Header = (props: HeaderProps) => {
  const { handleMenuClick } = props;
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton onClick={handleMenuClick} color="inherit">
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "inline",
            }}
          >
            GNNews
          </Link>
        </Typography>
        <Stack direction="row" spacing={1}>
          <ViewLayoutSwitcher />
          <PopUp buttonLabel="Open Dialog" />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
