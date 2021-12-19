import React, { useState } from "react";
import { Grid, Paper, TextField, Button, Avatar } from "@material-ui/core";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import emailjs from "emailjs-com";

export const Contact = () => {
  const paperStyle = { padding: 50, width: 300, margin: "20px auto" };
  const btnStyle = { margin: "20px 0" };
  const TextFieldStyle = { margin: "20px 0" };
  const avatarStyle = { backgroundColor: "green" };
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const send = (e) => {
    const dane = [];
    dane.push(login, email, message);

    //This is important, i'm not sure why, but the email won't send without it

    alert("Wiadomość wysłana :)");
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            {" "}
            <ContactMailOutlinedIcon />{" "}
          </Avatar>
          <h2>Kontakt</h2>
        </Grid>

        <TextField
          style={TextFieldStyle}
          id="standard-basic1"
          label="Imie "
          fullWidth
          value={login}
          onChange={handleChangeLogin}
        />

        <TextField
          id="standard-basic2"
          label="E-mail "
          fullWidth
          value={email}
          onChange={handleChangeEmail}
        />

        <TextField
          style={TextFieldStyle}
          id="standard-basic3"
          label="Wiadomość "
          multiline
          minRows={5}
          maxRows={5}
          fullWidth
          value={message}
          onChange={handleChangeMessage}
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          style={btnStyle}
          onClick={send}
        >
          Wyślji wiadomość
        </Button>
      </Paper>
    </Grid>
  );
};
