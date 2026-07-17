# React Hands-On Lab Exercises — Solutions

This folder contains 10 complete, runnable React apps, one per lab exercise
from the training document.

| Folder | Lab | Topic |
|---|---|---|
| 01-myfirstreact | 1 | First React app, create-react-app setup |
| 02-StudentApp | 2 | Class components (Home, About, Contact) |
| 03-scorecalculatorapp | 3 | Function component + props + CSS |
| 04-blogapp | 4 | Component lifecycle (componentDidMount, componentDidCatch, fetch API) |
| 05-CohortDetailsApp | 5 | CSS Modules & inline styles |
| 06-cricketapp | 6 | ES6 features: map, filter, arrow functions, destructuring, array merge |
| 07-officespacerentalapp | 7 | JSX, React.createElement, inline CSS, JS expressions |
| 08-eventexamplesapp | 8 | Event handling, synthetic events, `this` keyword |
| 09-ticketbookingapp | 9 | Conditional rendering (guest vs logged-in user) |
| 10-bloggerapp | 10 | Multiple conditional rendering techniques |

## How to run any of these apps

Each folder is a self-contained Create React App project (minus the
`node_modules` folder, which is not included to keep the zip small).

```bash
cd <folder-name>
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

## Requirements

- Node.js
- NPM
- (Recommended) Visual Studio Code

## Notes

- Lab 4 (`blogapp`) fetches live data from
  `https://jsonplaceholder.typicode.com/posts`, so it needs an internet
  connection when running.
- Lab 5 (`CohortDetailsApp`) demonstrates CSS Modules
  (`CohortDetails.module.css`) with scoped class names.
- Lab 9 and 10 use React state/hooks to demonstrate several different
  conditional-rendering patterns (if/else, element variables, ternary,
  switch, and the `&&` operator).
