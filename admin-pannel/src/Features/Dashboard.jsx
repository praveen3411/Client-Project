import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../css/Dashboard.css";
import Logo from "../assets/me.png";
import { BsCartCheckFill } from "react-icons/bs";
import { AiFillGold } from "react-icons/ai";
import { GiWaterBottle, GiClothes } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import Slider from "./Slider";

export default function DashBoardComponents() {
  return (
    <Box>
      <header className="header">
        <Box className="logo">
          <Link to={"/"}>Admin Pannel</Link>
          <Box className="search_box">
            <input type="text" placeholder="Search Your Cities Here" />
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </Box>
        </Box>

        <Box className="header-icons">
          <i className="fas fa-bell"></i>
          <Box className="account">
            <img src={Logo} alt="" style={{ backgroundColor: "black" }} />
            <h4>K. Praveen</h4>
          </Box>
        </Box>
      </header>
      <Box className="container">
        <nav>
          <Box className="side_navbar">
            <span>Main Menu</span>
            <Link to={"/"} className="active">
              Dashboard
            </Link>
            <Link to={"/"}>Profile</Link>
            <Link to={"/"}>History</Link>
            <Link to={"/"}>Application</Link>
            <Link to={"/"}>My Account</Link>
            <Link to={"/"}>Documnets</Link>

            <Box className="links">
              <span>Quick Link</span>
              <Link to={"/"}>NetBanking</Link>
              <Link to={"/"}>EasyPay</Link>
              <Link to={"/"}>Paypal</Link>
            </Box>
          </Box>
        </nav>
        <Box className="main-body">
          <Box className="promo_card">
            <h1>Welcome to Admin-Pannel</h1>
            <span>Add More Prodects to view speed Up 🥳</span>
            <button>Add Products</button>
            <Slider />
          </Box>

          <Box className="history_lists"></Box>
        </Box>
        <Box className="sidebar">
          <h4>PRODUCTS LIST</h4>
          <Box className="balance">
            <i className="icon">
              <GiWaterBottle />
            </i>
            <Box className="info">
              <h5>Drinks</h5>
              <span>
                <i className="fa-solid fa-wine-glass"></i>
                Cool-Drinks
              </span>
            </Box>
          </Box>

          <Box className="balance">
            <i className="icon">
              <BsCartCheckFill />
            </i>
            <Box className="info">
              <h5>Cosmotics</h5>
              <span>
                <i className="fa-solid fa-rupee-sign"></i> Makeup
              </span>
            </Box>
          </Box>
          <Box className="balance">
            <i className="icon">
              <AiFillGold />
            </i>
            <Box className="info">
              <h5>Jwellery</h5>
              <span>
                <AiFillGold /> Gold
              </span>
            </Box>
          </Box>

          <Box className="balance">
            <i className="icon">
              <GiClothes />
            </i>
            <Box className="info">
              <h5>Clothes</h5>
              <span>
                <GiClothes />
                Clothes
              </span>
            </Box>
          </Box>

          <Box className="balance">
            <i className="icon">
              <FaLaptopCode />
            </i>
            <Box className="info">
              <h5>Electrons</h5>
              <span>
                <FaLaptopCode /> Electric
              </span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
