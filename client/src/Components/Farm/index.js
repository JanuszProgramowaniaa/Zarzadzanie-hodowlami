import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

export const Farm = (props) => {
  const [desc, SetDesc] = useState(false);
  const description = <div> {props.description} </div>;

  const expand = () => {
    SetDesc(!desc);
  };

  return (
    <div className="Container">
      <div className="Title">
        <h1>{props.Title}</h1>
      </div>

      <NavLink to="/Desc" activeStyle>
        <div className="Image">
          {" "}
          <img src={props.image} alt="Farm" />{" "}
        </div>
      </NavLink>

      <div className="Description" onClick={expand}>
        <h5>{desc ? "Schowaj" : "Pokaż więcej"}</h5>
      </div>
      {desc ? description : null}
    </div>
  );
};
