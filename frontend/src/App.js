import React from "react";
import NamLst from "./NamLst";
import Counter from "./Counter";
import GetAjokes from "./Componetes/GetAjokes";
import FillterDta from "./Componetes/FillterDta";

export default function App() {
  return (
    <div>
      <NamLst />
      <Counter />
      <GetAjokes />
      <FillterDta />
    </div>
  );
}
