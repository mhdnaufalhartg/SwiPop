import React from "react";
import Card from "./components/Card/Card";

export default function App(props) {
  return (
    <div className="container bg-slate-800 grid place-content-center min-h-screen   ">
      <div className="card">
        <Card />
      </div>
    </div>
  );
}
