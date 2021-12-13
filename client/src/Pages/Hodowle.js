import React from "react";
import { Farm } from "../Components/Farm";
import { Newfarm } from "../Components/Newfarm";
import kroliki from "../Assets/Images/kroliki.jpeg";
import krowy from "../Assets/Images/krowy.jpeg";
import Owczarki from "../Assets/Images/Owczarki.jpeg";
import swinki from "../Assets/Images/swinki.jpeg";

const Hodowle = () => {
  const ContainerStyle = {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  let Dane = [
    [
      "hodowla krówek",
      krowy,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea",
    ],
    [
      "hodowla maciorek",
      swinki,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea",
    ],
    [
      "hodowla królików",
      kroliki,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea",
    ],
    [
      "hodowla królików",
      kroliki,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea",
    ],
    [
      "hodowla maciorek",
      swinki,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea",
    ],
    [
      "hodowla owczarków niemieckich",
      Owczarki,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea",
    ],
    [
      "hodowla krówek",
      krowy,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea",
    ],
  ];
  return (
    <div style={ContainerStyle}>
      {Dane.map((items) => (
        <Farm Title={items[0]} image={items[1]} description={items[2]} />
      ))}
      <Newfarm />
    </div>
  );
};

export default Hodowle;
