import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Details from './views/Details/Details';


function App() {
  return (
    <div className="App">

      <Router>

        
          <Route path="/" exact render={(routerProps) =>
            <Login {...routerProps} />}>
          </Route>
          
          <Route path="/home" exact render={(routerProps) =>
            <Home {...routerProps} />}>
          </Route>


          <Route path="/register" exact render={(routerProps) =>
            <Register {...routerProps} />}>
          </Route>

          <Route path="/details" exact render={(routerProps) =>
            <Details {...routerProps} />}>
          </Route>
          
   
      </Router>




    </div>
  );
}

export default App;
