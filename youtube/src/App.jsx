import React from "react";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Sidebar />
        <MainContainer />
      </div>
    </Provider>
  );
};

export default App;
