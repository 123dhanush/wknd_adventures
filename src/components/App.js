import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./header/Header";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useRoutes,
} from "react-router-dom";
import HomePage from "./home/HomePage";
import Adventures from "./adventures/Adventures";
import Faqs from "./faqs/Faqs";
import Aboutus from "./aboutus/Aboutus";

const RouteUrls = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/adventures", element: <Adventures /> },
    { path: "/faqs", element: <Faqs /> },
    { path: "/aboutus", element: <Aboutus /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <RouteUrls />
      </Router>
    </div>
  );
}

export default App;
