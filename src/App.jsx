import { useEffect, useState } from "react";
import "./App.scss";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
import RadioButtons from "./components/RadioButtons/RadioButtons";
import RangeInput from "./components/RangeInput/RangeInput";

const App = () => {
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(5);
  const [gender, setGender] = useState("all");

  const getUsers = async (resultNumber, genderFilter) => {
    const url = "https://randomuser.me/api";
    let urlWithParams = url + `?results=${resultNumber}`;

    if (genderFilter !== "all") {
      urlWithParams += `&gender=${genderFilter}`;
    }

    const res = await fetch(urlWithParams);
    const data = await res.json();

    setUsers(data.results);
  };

  useEffect(() => {
    getUsers(numberOfUsers, gender);
  }, [numberOfUsers, gender]);

  const handleInputChange = (event) => {
    setNumberOfUsers(event.target.value);
  };

  const handleChange = (event) => {
    setGender(event.target.value);
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
      <RadioButtons
        onChange={handleChange}
        selected={gender}
        options={["all", "female", "male"]}
        label="Select User Gender:"
      />
      <ProfileContainer profiles={users} />
    </div>
  );
};

export default App;
