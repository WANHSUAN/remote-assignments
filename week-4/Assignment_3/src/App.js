import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";
import { Welcome } from "./Main";
import { Title } from "./Main";

const Main = () => {
  return (
    <main>
      <Welcome />
      <Title />
    </main>
  );
};

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Main />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
