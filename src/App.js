import logo from "./logo.svg";
import "./App.css";
import { Users } from "./user";
import { useState } from "react";
import Table from "./components/Table";
function App() {
  const [query, setQuery] = useState("");
  return (
    <div className=" bg-slate-500">
      <div className=" m-10 bg-white">
        <Table data={Users} />
      </div>
    </div>
  );
}

export default App;
