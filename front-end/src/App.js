import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "./Components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router >
<Navbar/>
      </Router>
    </div>
  );
}

export default App;
