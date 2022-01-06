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
import Magazine from "./magazine/Magazine";
import Footer from "./footer/Footer";

const RouteUrls = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/Magazine", element: <Magazine recentArticles={false} /> },
    { path: "/adventures", element: <Adventures nextadventures={false} /> },
    { path: "/faqs", element: <Faqs /> },
    { path: "/aboutus", element: <Aboutus /> },
  ]);
  return routes;
};

function App() {
  return (
    <div>
      <Router>
        <Header />
        <RouteUrls />
        <br />
        <br />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
