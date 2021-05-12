import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import WorkList from "./components/work-list.component";
import EditWork from "./components/edit-work.component";
import CreateWork from "./components/create-work.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={WorkList} />
      <Route path="/edit/:id" component={EditWork} />
      <Route path="/create" component={CreateWork} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;