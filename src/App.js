import { Route, BrowserRouter as Router } from 'react-router-dom';
import AppPage from './views/AppPage/AppPage';
import Login from './views/Login/Login';
import OAuthAccess from './views/OAuthAccess/OAuthAccess';
import Register from './views/Register/Register';



function App() {
  return (
    <div className="App bg-green">

      <Router>

        
          <Route path="/login" exact render={(routerProps) =>
            <Login {...routerProps} />}>
          </Route>
          
          <Route path="/" exact render={(routerProps) =>
            <AppPage {...routerProps} />}>
          </Route>
          <Route path="/OauthAccess" exact render={(routerProps) =>
            <OAuthAccess {...routerProps} />}>
          </Route>


          <Route path="/register" exact render={(routerProps) =>
            <Register {...routerProps} />}>
          </Route>       
   
      </Router>




    </div>
  );
}

export default App;
