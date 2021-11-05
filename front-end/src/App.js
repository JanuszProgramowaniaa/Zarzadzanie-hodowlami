import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "./Components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages'
import Hodowle from './Pages/Hodowle'
import Kontakt from './Pages/Kontakt'
import Logowanie from './Pages/Logowanie'
import Rejestracja from './Pages/Rejestracja'
import Desc from './Pages/Desc'
function App() {
  return (
    <div className="App">
      <Router >
<Navbar/>
<Switch>
  <Route path='/' exact component={Home} />
  <Route path='/hodowle' exact component={Hodowle} />
  <Route path='/kontakt' exact component={Kontakt} />
  <Route path='/logowanie' exact component={Logowanie} />
  <Route path='/rejestracja' exact component={Rejestracja} />

  <Route path='/Desc' render={()=>(
    <Desc name={"hodowla maciorek"} />

  )} />
</Switch>
      </Router>
    </div>
  );
}

export default App;
