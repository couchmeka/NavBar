import React from "react";
import ReactDOM from "react-dom/client";
import MovieListPage from "./Pages/MovieListPage";
import MoviePage from "./Pages/MoviePage";
import HomePage from "./Pages/HomePage";
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index:true,
        element: <HomePage/>
      },
      {
        path: "/movielist",
        element: <MovieListPage/>
      },
      {
        path: "/movie",
        element: <MoviePage/>
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);