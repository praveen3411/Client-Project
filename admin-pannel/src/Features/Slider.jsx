import { useEffect, useRef, useState } from "react";
import Product1 from "../assets/Product1.png";
import Product2 from "../assets/product6.png";
import Product3 from "../assets/product5.png";
import Product4 from "../assets/product4.png";
const data = [Product1, Product2, Product3, Product4];
export default function Slider() {
  const [time, settime] = useState(0);
  if (time === data.length) {
    settime(0);
  }
  let ref = useRef(null);
  useEffect(() => {
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
      settime((time) => time + 1);
    }, 2000);
  }, []);
  return (
    <div>
      <img
        style={{ marginLeft: "200px" }}
        width={"400px"}
        height={"300px"}
        src={data[time]}
        alt="images"
      />
    </div>
  );
}
