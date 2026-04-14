import {
  AppBar,
  Box,
  Button,
  CardMedia,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <AppBar position="static" color="secondary" elevation={24}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="/">
            <CardMedia
              component="img"
              sx={{ width: 50, display: "block" }}
              image="/HG.png"
              alt="Helpme Gym logo"
            />
          </Link>

          <Box>
            <Link href="/login">
              <Button variant="contained">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="contained" sx={{ ml: 2 }}>
                Sign Up
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
