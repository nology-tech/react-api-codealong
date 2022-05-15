import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import CardContainer from "./components/CardContainer/CardContainer";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const url = "https://randomuser.me/api?results=5";
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data.results);
  };

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <Button onClick={getUsers} label="Get Random Users" />
      <CardContainer cards={users} />
    </div>
  );
};

export default App;
