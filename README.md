### 1. What is JSX, and why is it used?

JSX means JavaScript XML. It allows us to write HTML-like code inside JavaScript or TypeScript. It makes React UI code easier to read and understand.

### 2. What is the difference between State and Props?

Props are used to pass data from a parent component to a child component. State is data that belongs to a component and can change over time.

### 3. What is the useState hook, and how do you use it?

`useState` is a React Hook used to store and update data in a component. In this project, it is used to store the technology list and the technologies selected in the user's stack.

### 4. What is the useEffect hook, and why might you need it?

`useEffect` is used for side effects such as fetching data. In this project, it is used to load the technologies from the `technologies.json` file when the application starts.

### 5. How do you create a unique key when rendering a list in React?

We use a unique value such as an ID as the key. In this project, `technology.id` is used as the key when rendering technology cards and stack items.

### 6. What is conditional rendering? Give an example from this project.

Conditional rendering means showing different UI depending on a condition. For example, when the stack is empty, the project shows an empty-state message. When technologies are added, it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component? How do you pass data back?

A parent passes data to a child using props. To send information back, the parent can pass a callback function as a prop. In this project, `App` passes technology data and functions to child components such as `TechnologyList` and `YourStack`.
