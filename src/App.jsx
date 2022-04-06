import { useEffect, useState } from "react";
import "./App.scss";
import CardContainer from "./components/CardContainer/CardContainer";
import RadioButtons from "./components/RadioButtons/RadioButtons";
import RangeInput from "./components/RangeInput/RangeInput";

const App = () => {
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(5);
  const [filterBy, setFilterBy] = useState("all");

  const url = "https://randomuser.me/api";

  const getUsers = async (resultNumber, genderFilter) => {
    let urlWithParams = url + `?results=${resultNumber}`;

    if (genderFilter !== "all") {
      urlWithParams += `&gender=${genderFilter}`;
    }

    const res = await fetch(urlWithParams);
    const data = await res.json();

    setUsers(data.results);
  };

  useEffect(() => {
    getUsers(numberOfUsers, filterBy);
  }, [numberOfUsers, filterBy]);

  const handleInputChange = (event) => {
    setNumberOfUsers(event.target.value);
  };

  const handleClick = (event) => {
    setFilterBy(event.target.value);
  };

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <RangeInput
        id="user-range"
        label={`Number of users: ${numberOfUsers}`}
        min={1}
        max={10}
        value={numberOfUsers}
        onChange={handleInputChange}
      />
      <RadioButtons onClick={handleClick} options={["All", "Female", "Male"]} caption="Select User Gender:"/>
      <CardContainer cards={users} />
    </div>
  );
};

export default App;
