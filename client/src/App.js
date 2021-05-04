import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Home } from "./components/booking/Home";
import { HomePage } from "./components/HomePage";
import { Hotel } from "./components/hotels/Hotel";
import { Nav } from "./components/layout/Nav";
import { ProtectedRoutes } from "./components/routes/ProtectedRoutes";



function App() {
  return (


    <Router>
      <Switch >
        <Route path='/' exact component={HomePage} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <ProtectedRoutes path='/home' exact component={Hotel} />
      </Switch>
    </Router>


  );
}

export default App;
