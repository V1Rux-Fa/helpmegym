import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
//import { getUsers } from "../../lib/users";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  TextField,
  Button,
  CardMedia,
} from "@mui/material";

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
            Login
          </Typography>

          <Stack spacing={2}>
            <TextField label="Name" fullWidth />
            <TextField label="Last Name" fullWidth />
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
*/
