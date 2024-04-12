import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/layout/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import SearchPage from "./component/SearchPage";

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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
