import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages";
import Hodowle from "./Pages/Hodowle";
import Kontakt from "./Pages/Kontakt";
import Logowanie from "./Pages/Logowanie";
import Rejestracja from "./Pages/Rejestracja";
import User_config from "./Pages/User_config";
import Add_farm from "./Pages/AddFarm";
import Desc from "./Pages/Desc";
import { CurrentUserProvider } from "./context/CurrentUser.context";
function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hodowle" exact component={Hodowle} />
            <Route path="/kontakt" exact component={Kontakt} />
            <Route path="/logowanie" exact component={Logowanie} />
            <Route path="/rejestracja" exact component={Rejestracja} />
            <Route path="/User_config" exact component={User_config} />
            <Route path="/Add_farm" exact component={Add_farm} />
            <Route path="/Desc/:id" exact component={Desc} />
          </Switch>
        </Router>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
