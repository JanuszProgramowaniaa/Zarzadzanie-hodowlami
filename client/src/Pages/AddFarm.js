import React, { useState } from "react";
import { CurrentUserConsumer } from "../context/CurrentUser.context";
import { Button } from "@material-ui/core";
import axios from "axios";
const btnStyle = { width: "100%" };

const Add_farm = () => {
  const [isUserId, setUserId] = useState(localStorage.getItem("id"));

  const [isNameform, setNameform] = useState("");
  const [isImageUrlform, setImageUrlform] = useState("image/krowy.jpg");
  const [isDescriptionform, setDescriptionform] = useState("");

  const handleChangeName = (e) => {
    setNameform(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescriptionform(e.target.value);
  };

  const addfarm = async () => {
    await axios.post("http://localhost:5000/api/farm", {
      Name: isNameform,
      ImageUrl: isImageUrlform,
      Description: isDescriptionform,
      UserId: isUserId,
    });

    alert("Dodano nową farme");
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
            <h1>Dodawanie nowej hodowli</h1>

            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Nazwa hodowli</th>

                  <td>
                    <input type="text" onChange={handleChangeName}></input>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Obrazek</th>

                  <td>
                    <input type="file"></input>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Opis</th>

                  <td>
                    <textarea
                      id="disc"
                      name="discription"
                      rows="4"
                      cols="50"
                      onChange={handleChangeDescription}
                    ></textarea>
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
                      onClick={addfarm}
                    >
                      Dodaj nową hodowle
                    </Button>
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

export default Add_farm;
