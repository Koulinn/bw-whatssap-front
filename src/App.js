import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Details from './views/Details/Details';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Router>

        <Container>
          
          <Route path="/" exact render={(routerProps) =>
            <Home {...routerProps} />}>
          </Route>

          <Route path="/login" exact render={(routerProps) =>
            <Login {...routerProps} />}>
          </Route>

          <Route path="/register" exact render={(routerProps) =>
            <Register {...routerProps} />}>
          </Route>

          <Route path="/details" exact render={(routerProps) =>
            <Details {...routerProps} />}>
          </Route>
          
        </Container>
      </Router>




    </div>
  );
}

export default App;
