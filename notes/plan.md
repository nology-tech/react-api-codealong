# lesson-start

In App.jsx:

- Import the `<Button/>` component
- Write a async `getUser()` function. Talk through `async/await` syntax and for now it can just log the result to the console.
- Hook up the `getUser()` function to run onClick of the `<Button/>`.

```jsx
// App.jsx

import "./App.scss";
import Button from "./components/Button/Button";

const App = () => {
  const url = "https://randomuser.me/api/";

  const getUser = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results[0]);
  };

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <Button onClick={getUser} label="Get Random User" />
    </div>
  );
};

export default App;
```

- You can compare what the same function would look like with `.then()`

```jsx
const getUser = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.results[0]));
};
```

- Bring in the `useState()` hook so you can get the component to rerender once you have the response from the API.
- Set the first user from the API to state instead of logging it.
- Import the `<ProfileCard/>` into the App.jsx and hook it up to render when you have a user and give it the props it needs.

- The Completed App is below, afterwards move onto the challenge.

```jsx
// App.jsx

import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import ProfileCard from "./components/ProfileCard/ProfileCard";

const App = () => {
  const [user, setUser] = useState();

  const url = "https://randomuser.me/api/";

  const getUser = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setUser(data.results[0]);
  };

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <Button onClick={getUser} label="Get Random User" />
      {user && (
        <ProfileCard
          userName={`${user.name.first} ${user.name.last}`}
          userImage={user.picture.large}
          userEmail={user.email}
          userPhoneNumber={user.phone}
        />
      )}
    </div>
  );
};

export default App;
```

---

### Move onto Challenges

- [Challenge]("../challenge/challenge.md")
- [Solution]("../challenge/solution.md")
