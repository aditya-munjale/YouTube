import React from "react";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        {/* Header at the top */}
        <Head />

        {/* Sidebar + MainContent */}
        <div className="flex flex-1">
          <Sidebar />
          <MainContainer />
        </div>
      </div>
    </Provider>
  );
};

export default App;
