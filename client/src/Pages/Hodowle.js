import React, { useEffect, useState } from "react";
import { Farm } from "../Components/Farm";
import { Newfarm } from "../Components/Newfarm";
import axios from "axios";
const Hodowle = () => {
  const ContainerStyle = {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const [isDane, setDane] = useState([]);
  const image_path = "http://localhost:5000/public/uploads/";

  const fetchFarm = async () => {
    const id = localStorage.getItem("id");
    const res = await axios.get("http://localhost:5000/api/farm/" + id);
    const farms = res.data;

    setDane(farms);
  };

  useEffect(() => {
    fetchFarm();
  }, []);

  return (
    <div style={ContainerStyle}>
      {isDane.map((items) => (
        <Farm
          Title={items.Name}
          image={image_path + items.ImageUrl}
          description={items.Description}
          id={items._id}
        />
      ))}
      <Newfarm />
    </div>
  );
};

export default Hodowle;
