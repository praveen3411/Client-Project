import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import backgroundimage from "../assets/BackGround.svg";
export default function Home() {
  return (
    <Box>
      <img
        style={{ marginTop: "50px", marginLeft: "30px" }}
        src={backgroundimage}
        width="95%"
        height={"500px"}
        alt={"images"}
      />
      <center>
        <h3>
          <Link to={"/dashboard"}>Go To DashBoard</Link>
        </h3>
      </center>
    </Box>
  );
}
