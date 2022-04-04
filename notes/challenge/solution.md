### Challenge Solution

Create a `<CardContainer/>` component, import it into the app and use it in the return statement.

Give the users state to the `<CardContainer/>` as props.

```jsx
// App.jsx

import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import CardContainer from "./components/CardContainer/CardContainer";

const App = () => {
  const [users, setUsers] = useState([]);

  const url = "https://randomuser.me/api?results=5";

  const getUsers = async () => {
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
```

Inside the `<CardContainer/>` component import the `<ProfileCard/>`, use the given data/props and map over it to create `<ProfileCard/>`'s, give each component the props that it needs from the data.

```jsx
// CardContainer.jsx

import ProfileCard from "../ProfileCard/ProfileCard";
import "./CardContainer.scss";

const CardContainer = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((user) => {
        return (
          <ProfileCard
            key={user.registered.date}
            userName={`${user.name.first} ${user.name.last}`}
            userImage={user.picture.large}
            userEmail={user.email}
            userPhoneNumber={user.phone}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
```

Style the `<CardContainer/>` so it fits the content.

```scss
// CardContainer.scss

.card-container {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1rem;
  justify-items: center;
}
```
