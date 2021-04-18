import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Home } from "./components/booking/Home";



function App() {
  return (


    <Router>
      <Switch >
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </Router>


  );
}

export default App;
