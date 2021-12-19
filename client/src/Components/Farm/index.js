import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
export const Farm = (props) => {
  const [desc, SetDesc] = useState(false);

  const Edit = () => {
    alert();
  };

  const description = (
    <div>
      {" "}
      {props.description} <br></br>
      <button
        style={{ marginBottom: "15px", marginTop: "5px" }}
        type="button"
        class="btn btn-success"
        onClick={Edit}
      >
        Edytuj hodowle
      </button>{" "}
    </div>
  );
  const image = props.image;
  const farmId = props.image;

  const expand = () => {
    SetDesc(!desc);
  };

  return (
    <div className="Container">
      <div className="Title">
        <h1>{props.Title}</h1>
      </div>

      <NavLink to={`/Desc/${props.id}`}>
        <div className="Image">
          {" "}
          <img src={image} alt="Farm" />{" "}
        </div>
      </NavLink>

      <div className="Description" onClick={expand}>
        <h5>{desc ? "Schowaj" : "Pokaż więcej"}</h5>
      </div>
      {desc ? description : null}
    </div>
  );
};
