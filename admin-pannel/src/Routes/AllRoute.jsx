import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import BlogPage from "../Components/BlogPage";
import DashBoard from "../Components/Dashboard";
import Home from "../Components/Home";
import LoginPage from "../Components/Login";
import LogOut from "../Components/Logout";
import PageNotFound from "../Components/PageNotfound";
import Products from "../Components/Products";
import MainNavbar from "./Nav";

export default function AllRotes() {
  return (
    <Box>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  );
}
