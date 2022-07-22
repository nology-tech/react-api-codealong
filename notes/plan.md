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
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const url = "https://randomuser.me/api?results=5";
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
      <ProfileContainer profiles={users} />
    </div>
  );
};

export default App;
```

Next look how how you can get `useEffect()` to trigger when something updates.

For this you will use the `<RangeInput/>` component, when the user changes the slider that amount of users will be requested.

In App.jsx:

- Initialize some new state this will be how we store the number of users we want to see.

  - `const [numberOfUsers, setNumberOfUsers] = useState(7);`

- Update the `getUsers()` function to accept a parameter this will be the `resultNumber`, the amount of random users we want to display. We give it as a parameter because if we used the `numberOfUsers` state inside the function, the function would become a dependency as it would be changing whenever the state did.

  - Use this parameter to update the url to add the query param onto the end `?results=${resultNumber}`.
  - In the useEffect() where we call the function add the `numberOfUsers` state as the argument.

- Talk through the `<RangeInput/>` component, talk through its props.
- Import it into app and give it the props it needs.

```jsx
<RangeInput
  id="user-range"
  label={`Number of users: ${numberOfUsers}`}
  min={1}
  max={10}
  value={numberOfUsers}
  onChange={handleInputChange}
/>
```

- Write a function to handle the input change and update the state.

```jsx
const handleInputChange = (event) => {
  setNumberOfUsers(event.target.value);
};
```

- The last step is to add the `numberOfUsers` to the dependency array.

The Completed App is below.

```jsx
// App.jsx

import { useEffect, useState } from "react";
import "./App.scss";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
import RangeInput from "./components/RangeInput/RangeInput";

const App = () => {
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(7);

  const getUsers = async (resultNumber) => {
    const url = "https://randomuser.me/api";
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
      <ProfileContainer profiles={users} />
    </div>
  );
};

export default App;
```

---

### Move onto Challenges

- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)
