import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <Box sx={{ textAlign: "center", mt: 10, mb: 4 }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Helpme Gym
        </Typography>
      </Box>
    </>
  );
}
