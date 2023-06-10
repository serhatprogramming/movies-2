import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const movies = [
  {
    id: 1,
    title: "The Godfather",
    watchList: true,
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    watchList: false,
  },
  {
    id: 3,
    title: "The Lord of the Rings: The Return of the King",
    watchList: true,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App movies={movies} />);
