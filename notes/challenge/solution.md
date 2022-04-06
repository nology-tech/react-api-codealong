## Challenge

On the docs it shows you that you can specify the gender by adding a query param to the end of the url.

So if we want to request a certain gender we can add `?gender=female` or `?gender=male` to the end or our URL.

If we do not add it we get both genders.

Import the `<RadioButtons/>` component into App.jsx. We can use this to pass the selected gender back to the App.

The component takes a couple of props:

- onClick: A function to handle when a user clicks one of the buttons.
- options: An array of strings. These are the different values and labels for the buttons.
- caption: The text that will be above the buttons.

Import the component into App.jsx and add it to the return statement. Give it the props it needs.

```jsx
// App.jsx
<RadioButtons
  onClick={handleClick}
  options={["All", "Female", "Male"]}
  caption="Select User Gender:"
/>
```

We need to hook these pieces together. In App.jsx create some new state `const [filterBy, setFilterBy] = useState("all");` this will be how we store the value from the radio buttons.

We need a way to update the new state when a radio button is clicked. Create a function that gets the value from the event and add's it to state.

```jsx
// App.jsx
const handleClick = (event) => {
  setFilterBy(event.target.value);
};
```

Make sure this function is given to the `<RadioButtons/>` component as props.

The `getUsers()` function needs to be updated.
It will take another parameter which will be the gender.
We can still add the result query param to the end.
If the gender is not all we can add on the gender query param we want to request.

```jsx
// App.jsx
const getUsers = async (resultNumber, genderFilter) => {
  let urlWithParams = url + `?results=${resultNumber}`;

  if (genderFilter !== "all") {
    urlWithParams += `&gender=${genderFilter}`;
  }

  const res = await fetch(urlWithParams);
  const data = await res.json();

  setUsers(data.results);
};
```

Finally we can update our `useEffect`, we want to add the new state as an argument to the `getUsers()` function.
We can then update our dependency array so it calls the function when the state changes.

```jsx
// App.jsx
useEffect(() => {
  getUsers(numberOfUsers, filterBy);
}, [numberOfUsers, filterBy]);
```

---
