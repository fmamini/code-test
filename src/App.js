import React from 'react'
import Test1 from './Components/Test1/Test1'
import history from './helper/history';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/Test1" component={Test1} />
          <Redirect from="/" to="Test1"></Redirect>
        </Switch>
      </Router>

    </div>


  );
}
export default App;
