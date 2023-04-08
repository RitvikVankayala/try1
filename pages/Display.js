import SideSide from "../components/SideSide";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Que() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://127.0.0.1:5000/api/text");
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <div
      style={{
        backgroundImage: `url("https://c8.alamy.com/comp/W20AEP/food-background-with-traditional-ingredients-for-mediterranean-cuisine-over-white-background-top-view-with-copy-space-italian-food-W20AEP.jpg")`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SideSide />
    </div>
  );
}
