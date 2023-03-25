import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";
import usePopUp from "./usePopUp";
import ViewLayoutSwitcher from "./ViewLayoutSwitcher";

interface HeaderProps {
  handleMenuClick: () => void;
}

const Header = (props: HeaderProps) => {
  const { handleMenuClick } = props;

  const [open, handleClickOpen, handleClose] = usePopUp();

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
          <Button variant="contained" onClick={handleClickOpen}>
            Open Dialog
          </Button>
          <PopUp
            id="header-pop-up"
            handleClose={handleClose}
            open={open}
            popUpElement={{ title: " title", content: " content" }}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
