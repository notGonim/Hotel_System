import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Home } from "./components/booking/Home";
import { HomePage } from "./components/HomePage";
import { Nav } from "./components/layout/Nav";



function App() {
  return (


    <Router>
      <Nav />
      <Switch >
        <Route path='/' exact component={HomePage} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </Router>


  );
}

export default App;
