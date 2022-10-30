import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import countries from "./CountriesDatabase";
import SearchBar from "./SearchBar";
export default function SearchBarLogic() {
  const [data, setData] = useState("");
  const [lift, setLift] = useState([]);
  console.log(lift);
  let handleData = useCallback((val) => {
    setData(val);
  }, []);
  useEffect(() => {
    if (data === "") {
      setLift([]);
    } else {
      let newlist = countries
        .filter((item) =>
          item.country.toLowerCase().indexOf(data) !== -1 ? true : false
        )
        .map((item) => item.country);
      setLift(newlist);
    }
  }, [data]);
  return (
    <Box>
      <SearchBar searcingbar={handleData} maindata={lift} />
    </Box>
  );
}
