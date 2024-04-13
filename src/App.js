import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/layout/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import SearchPage from "./component/SearchPage";
import Modal from "./component/Modal";
import Login from "./component/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Route path="/">
          <Modal />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
