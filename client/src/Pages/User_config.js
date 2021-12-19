import React, { useState } from "react";
import { CurrentUserConsumer } from "../context/CurrentUser.context";
import { Button } from "@material-ui/core";
import axios from "axios";
const btnStyle = { width: "100%" };

const User_config = () => {
  const [isLogin, setLogin] = useState(localStorage.getItem("login"));
  const [isName, setName] = useState(localStorage.getItem("user"));
  const [isSurname, setSurname] = useState(localStorage.getItem("surname"));

  const [isLoginform, setLoginform] = useState("");
  const [isNameform, setNameform] = useState("");
  const [isSurnameform, setSurnameform] = useState("");
  const [isPasswordform, setPasswordform] = useState("");

  const handleChangeLogin = (e) => {
    setLoginform(e.target.value);
  };

  const handleChangeName = (e) => {
    setNameform(e.target.value);
  };

  const handleChangeSurname = (e) => {
    setSurnameform(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPasswordform(e.target.value);
  };

  const changeData = async () => {
    await axios.put("http://localhost:5000/api/user/" + isLogin, {
      Login: isLoginform,
      Name: isNameform,
      Surname: isSurnameform,
      Password: 123,
    });
    localStorage.setItem("user", isLoginform);
    localStorage.setItem("login", isNameform);
    localStorage.setItem("surname", isSurnameform);
    setLogin(isLoginform);
    setName(isNameform);
    setSurname(isSurnameform);

    alert("zapisano");
  };

  return (
    <CurrentUserConsumer>
      {({ user, name, surname }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",

            height: "90vh",
          }}
        >
          <div>
            <h1>Aktualne Ustawienia</h1>

            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Login</th>
                  <td>{isLogin}</td>
                  <td>
                    <input type="text" onChange={handleChangeLogin}></input>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Name</th>
                  <td>{isName}</td>
                  <td>
                    <input type="text" onChange={handleChangeName}></input>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Surname</th>
                  <td>{isSurname}</td>
                  <td>
                    <input type="text" onChange={handleChangeSurname}></input>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Password</th>
                  <td>***** ***</td>
                  <td>
                    <input type="text" onChange={handleChangePassword}></input>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      fullWidth
                      style={btnStyle}
                      onClick={changeData}
                    >
                      Zapisz zmiany
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <button
                      style={{ marginBottom: "15px", marginTop: "5px" }}
                      fullWidth
                      type="button"
                      style={btnStyle}
                      class="btn btn-danger"
                      onClick={alert}
                    >
                      Edytuj hodowle
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </CurrentUserConsumer>
  );
};

export default User_config;
