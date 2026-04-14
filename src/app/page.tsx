import { CardMedia } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getUsers } from "../lib/users";

export default async function Home() {
  const data = await getUsers();
  return (
    <>
      <Navbar />
      <CardMedia
        component="img"
        sx={{ width: 1900, height: 600, display: "block", mx: "auto", mt: 2 }}
        image="/improve.png"
        alt="Helpme Gym logo"
      ></CardMedia>
      <Footer />
    </>
  );
}
