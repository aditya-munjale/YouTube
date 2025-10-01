import React from "react";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        {/* Header at the top */}
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
