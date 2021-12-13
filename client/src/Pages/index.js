import React, { useReducer } from "react";
import { CurrentUserConsumer } from "../context/CurrentUser.context";
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <CurrentUserConsumer>
        {({ user, logout }) => (
          <div>Usiądź wygodnie i wejdź w świat o którym nie miałeś pojęcia</div>
        )}
      </CurrentUserConsumer>
    </div>
  );
};

export default Home;
