import React from "react";
import Home from "./View/Home";
import { Provider } from "react-redux";
import store from "./app/store";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
