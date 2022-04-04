# post-challenge

Demonstrate the problem with calling our `getUsers()` outside of a useEffect().
The state changes will cause a infinite loop.

We want to get multiple users on page load / Mounting using useEffect().

In App.jsx:

- Import the useEffect hook from react.
- Demonstrate the useEffect hook will trigger only once with a empty dependency array.
- This way we can get `getUsers()` to be called once.
- Demonstrate if the dependency array is removed you will enter another infinite loop.

```jsx
// App.jsx
import { useEffect, useState } from "react";
import "./App.scss";
import CardContainer from "./components/CardContainer/CardContainer";

const App = () => {
  const [users, setUsers] = useState([]);

  const url = "https://randomuser.me/api";

  const getUsers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data.results);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <CardContainer cards={users} />
    </div>
  );
};

export default App;
```

Next look how how you can get `useEffect()` to trigger when something updates.

For this you will use the `<RangeInput/>` component, when the user changes the slider that amount of users will be requested.

In App.jsx:

- Initialize some new state this will be how we store the number of users we want to see.

- In the `getUsers()` function update the url to add the query param onto the end `?results=${resultNumber}`. Use the state to control the number requested.

- Write a function to handle the input change and update the state.

```jsx
// App.jsx

const [numberOfUsers, setNumberOfUsers] = useState(7);

const url = "https://randomuser.me/api";

const getUsers = async (resultNumber) => {
  const res = await fetch(url + `?results=${resultNumber}`);
  const data = await res.json();
  setUsers(data.results);
};

const handleInputChange = (event) => {
  setNumberOfUsers(event.target.value);
};
```

- Talk through the `<RangeInput/>` component, talk through its props.

- Import it into app and give it the props it needs.

- The last step is to add the `numberOfUsers` to the dependency array.

The Completed App is below.

```jsx
// App.jsx

import { useEffect, useState } from "react";
import "./App.scss";
import CardContainer from "./components/CardContainer/CardContainer";
import RangeInput from "./components/RangeInput/RangeInput";

const App = () => {
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(7);

  const url = "https://randomuser.me/api";

  const getUsers = async (resultNumber) => {
    const res = await fetch(url + `?results=${resultNumber}`);
    const data = await res.json();
    setUsers(data.results);
  };

  useEffect(() => {
    getUsers(numberOfUsers);
  }, [numberOfUsers]);

  const handleInputChange = (event) => {
    setNumberOfUsers(event.target.value);
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
      <CardContainer cards={users} />
    </div>
  );
};

export default App;
```

---
