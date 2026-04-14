import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
//import { getUsers } from "../../lib/users";

export default async function SignUp() {
  //const data = await getUsers();
  return (
    <>
      <Navbar />
      <Card sx={{ maxWidth: 400, margin: "auto", mt: 8 }}>
        <CardMedia
          component="img"
          sx={{ width: 200, display: "block", mx: "auto", mt: 2 }}
          image="/helpmeGym.png"
          alt="Helpme Gym logo"
        />
        <CardContent sx={{ display: "block", mx: "auto", mt: 2 }}>
          <Typography variant="h5" gutterBottom>
            Sign Up
          </Typography>

          <Stack spacing={2}>
            <TextField label="Name" fullWidth />
            <TextField label="Last Name" fullWidth />
            <TextField label="Email" fullWidth type="email" />
            <TextField label="Password" fullWidth type="password" />

            <Button variant="contained" fullWidth>
              Create Account
            </Button>
          </Stack>
        </CardContent>
      </Card>
      <Footer />
    </>
  );
}
/*
{data.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
      <h1>Hello, Next.js!</h1>
*/
