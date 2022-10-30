import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import ImgMediaCard from "../Features/ProductsData";
import "../css/Navbar.css";
import SearchBarLogic from "../Features/SearchBarlogic";
export default function Products() {
  const [putdata, setPutdata] = useState([]);
  console.log(putdata);
  let newfunction = async () => {
    try {
      let response = await axios.get(`https://fakestoreapi.com/products`);
      setPutdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newfunction();
  }, []);
  return (
    <Box>
      <SearchBarLogic />
      <Box className="products">
        {putdata.map((item) => (
          <Box key={item.id}>
            <ImgMediaCard
              className="products"
              image1={item.image}
              mainname={item.category}
              price={item.price}
              description={item.description.substring(0, 50)}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
