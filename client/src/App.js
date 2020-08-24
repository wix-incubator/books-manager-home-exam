import React from "react";
import * as style from "./App.module.scss";
import { Switch, Route } from "react-router-dom";
import { Collections } from "./pages/Collections";
import { BooksSearch } from "./pages/BooksSearch";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <main>
        <Switch>
          <Route
            exact
            path="/search"
            render={(props) => (
              <BooksSearch {...props} />
            )}
          />
          <Route
            exact
            path="/collections"
            render={(props) => (<Collections {...props}/>)}
          />
          <Route
            path="/"
            render={(props) => (
              <BooksSearch {...props}/>
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
