import { Box, AppBar, Toolbar, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";
import ViewLayoutSwitcher from "./ViewLayoutSwitcher";

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
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
    </Box>
  );
};
export default Header;
