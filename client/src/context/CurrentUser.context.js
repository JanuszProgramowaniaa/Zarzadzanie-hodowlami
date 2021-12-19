import React, { Component } from "react";
import axios from "axios";
const CurrentUserContext = React.createContext();

export class CurrentUserProvider extends Component {
  async fetchUser(Login, Password) {
    const res = await axios.get("http://localhost:5000/api/user/" + Login);
    const users = res.data;

    if (users != null) {
      if (users.Password === Password && users.Login === Login)
        this.setState({ user: { name: users.Name } });
      localStorage.setItem("user", users.Name);
      localStorage.setItem("login", users.Login);
      localStorage.setItem("surname", users.Surname);
      localStorage.setItem("id", users._id);
    }
  }

  state = {
    user: null,
    login: null,
  };

  login = (Login, Password) => {
    this.fetchUser(Login, Password);
  };

  logout = () => {
    this.setState({ user: null });
    this.setState({ error: null });
    localStorage.removeItem("user");
    localStorage.removeItem("login");
    localStorage.removeItem("surname");
    localStorage.removeItem("id");
    window.location.href = "index.html";
  };

  render() {
    const { children } = this.props;
    return (
      <CurrentUserContext.Provider
        value={{
          login: this.login,
          logout: this.logout,
          user: this.state.user,
        }}
      >
        {children}
      </CurrentUserContext.Provider>
    );
  }
}

export const CurrentUserConsumer = CurrentUserContext;
