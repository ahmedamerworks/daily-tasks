import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";
import Tasks from "./_components/tasks/Tasks";
import "./main.css";
import Pointer from "./_components/pointer/Pointer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="app-container">
      <Header />
      <Tasks />
      <Footer />
    </div>
  </React.StrictMode>
);
