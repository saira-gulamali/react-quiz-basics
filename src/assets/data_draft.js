const questionsDraft = [
  {
    id: 17,
    text: "What is the primary purpose of the `useReducer` hook in React?",
    options: [
      "To perform side effects in a functional component",
      "To memoize values for better performance",
      "To manage complex state logic in functional components",
      "To create a memoized version of a component",
    ],
    correctAnswer: "To manage complex state logic in functional components",
    explanation:
      "The primary purpose of `useReducer` is to manage complex state logic in functional components. It is particularly useful when state transitions depend on the previous state or when there's a need to handle a set of actions.",
    topic: "advanced hooks",
  },

  {
    id: 18,
    text: "When is `useReducer` particularly useful?",
    options: [
      "When dealing with asynchronous operations",
      "When using simple state logic in a component",
      "When state transitions depend on the previous state or a set of actions",
      "When there is a need to memoize functions",
    ],
    correctAnswer:
      "When state transitions depend on the previous state or a set of actions",
    explanation:
      "`useReducer` is particularly useful when state transitions depend on the previous state or when handling a set of actions is necessary. It provides a more advanced alternative to `useState` for managing complex state logic.",
    topic: "advanced hooks",
  },

  {
    id: 19,
    text: "What are the arguments returned by the `useReducer` hook?",
    options: [
      "`state` and `props`",
      "`dispatch` and `actions`",
      "`props` and `actions`",
      "`state` and `dispatch`",
    ],
    correctAnswer: "`state` and `dispatch`",
    explanation:
      "The `useReducer` hook returns an array with two elements: the current state (`state`) and a dispatch function (`dispatch`) to update the state based on actions.",
    topic: "advanced hooks",
  },

  {
    id: 20,
    text: "What does the `reducer` function in `useReducer` take as arguments?",
    options: [
      "Current state and next state",
      "Current state and action",
      "Previous state and dispatch function",
      "Previous state and action",
    ],
    correctAnswer: "Current state and action",
    explanation:
      "The `reducer` function takes two arguments: the current state and an action. It then returns the new state based on the action. The action describes the type of state transition.",
    topic: "advanced hooks",
  },

  {
    id: 21,
    text: "How does `useReducer` handle state changes based on actions?",
    options: [
      "By directly modifying the current state",
      "By returning the new state from the reducer function",
      "By calling the `dispatch` function with the new state",
      "By using the `useState` hook",
    ],
    correctAnswer: "By returning the new state from the reducer function",
    explanation:
      "The `useReducer` hook handles state changes based on actions by invoking the `reducer` function. The `reducer` function processes the action and returns the new state, updating the component.",
    topic: "advanced hooks",
  },

  {
    id: 22,
    text: "What is the recommended approach for updating objects in state within a `reducer` function?",
    options: [
      "Mutating the existing object",
      "Creating a new object with the same properties",
      "Using the `Object.assign` method",
      "Using the spread operator to create a new object",
    ],
    correctAnswer: "Using the spread operator to create a new object",
    explanation:
      "The recommended approach is to create a new object when updating objects in state. Mutating the existing object can lead to unexpected behavior.",
    topic: "advanced hooks",
  },

  {
    id: 23,
    text: "How can you avoid recreating the initial state in `useReducer`?",
    options: [
      "By using a constant for the initial state",
      "By passing a function as the initial state",
      "By using the `useState` hook",
      "By memoizing the initial state",
    ],
    correctAnswer: "By passing a function as the initial state",
    explanation:
      "To avoid recreating the initial state on every render, you can pass a function as the initial state when using `useReducer`. This function is called only during the initial render.",
    topic: "advanced hooks",
  },

  {
    id: 24,
    text: "What is the purpose of the `useCallback` hook in React?",
    options: [
      "Memoizing functions for better performance",
      "Managing complex state logic in functional components",
      "Accessing values from the React context",
      "Exposing functions to a parent component",
    ],
    correctAnswer: "Memoizing functions for better performance",
    explanation:
      "The `useCallback` hook is used to memoize functions, preventing them from being recreated on every render. This can be useful when passing functions as props to child components.",
    topic: "advanced hooks",
  },

  {
    id: 25,
    text: "How does `useCallback` differ from `useMemo`?",
    options: [
      "`useCallback` memoizes values, while `useMemo` memoizes functions",
      "They are interchangeable and serve the same purpose",
      "`useCallback` and `useMemo` are unrelated and have different use cases",
      "`useCallback` memoizes functions, while `useMemo` memoizes values",
    ],
    correctAnswer:
      "`useCallback` memoizes functions, while `useMemo` memoizes values",
    explanation:
      "`useCallback` memoizes functions, while `useMemo` memoizes values. Both hooks use a dependencies array to determine when to recalculate the memoized value or function.",
    topic: "advanced hooks",
  },

  {
    id: 26,
    text: "What does `React.memo` do in React?",
    options: [
      "Memoizes values for better performance",
      "Memoizes the rendering of a functional component",
      "Exposes functions to a parent component",
      "Manages complex state logic in functional components",
    ],
    correctAnswer: "Memoizes the rendering of a functional component",
    explanation:
      "`React.memo` is a higher-order component that memoizes the rendering of a functional component. It works by shallowly comparing the previous and current props, preventing unnecessary renders.",
    topic: "advanced hooks",
  },

  {
    id: 27,
    text: "How does `useLayoutEffect` differ from `useEffect` in terms of timing?",
    options: [
      "`useLayoutEffect` is asynchronous, while `useEffect` is synchronous",
      "useEffect runs after the browser repaints, while useLayoutEffect runs after DOM mutations and before the browser repaints",
      "Both hooks have the same timing in the component lifecycle",
      "useLayoutEffect is synchronous, while useEffect is asynchronous",
    ],
    correctAnswer:
      "useEffect runs after the browser repaints, while useLayoutEffect runs after DOM mutations and before the browser repaints",
    explanation:
      "useEffect is asynchronous and runs after the browser repaints. On the other hand, useLayoutEffect is synchronous and runs after all DOM mutations but before the browser repaints. It is used when side effects need to be synchronized with the browser's painting phases.",
    topic: "advanced hooks",
  },

  {
    id: 28,
    text: "When is it appropriate to use `useLayoutEffect` in React?",
    options: [
      "When performing side effects with asynchronous layout changes",
      "When side effects need to be synchronized with the browser's painting phases",
      "Only in situations where `useEffect` cannot be used",
      "When memoizing values for better performance",
    ],
    correctAnswer:
      "When side effects need to be synchronized with the browser's painting phases",
    explanation:
      "`useLayoutEffect` is appropriate when you need to perform measurements or manipulate the DOM and want to ensure that the DOM is painted before the user sees the changes.",
    topic: "advanced hooks",
  },

  {
    id: 29,
    text: "What is the primary purpose of the `useImperativeHandle` hook?",
    options: [
      "Exposing functions to a parent component",
      "Memoizing functions for better performance",
      "Managing complex state logic in functional components",
      "Customizing the instance value exposed when using `React.forwardRef`",
    ],
    correctAnswer:
      "Customizing the instance value exposed when using `React.forwardRef`",
    explanation:
      "`useImperativeHandle` allows a functional component to customize the instance value exposed when using `React.forwardRef`. It is useful when you want to hide certain properties or methods of a child component.",
    topic: "advanced hooks",
  },

  {
    id: 30,
    text: "When would you use `useImperativeHandle` with `React.forwardRef`?",
    options: [
      "When memoizing values in a functional component",
      "When managing asynchronous operations in a component",
      "When customizing the instance value exposed to a parent component through a ref",
      "When using it with the `useEffect` hook",
    ],
    correctAnswer:
      "When customizing the instance value exposed to a parent component through a ref",
    explanation:
      "You would use `useImperativeHandle` with `React.forwardRef` when you want to expose a specific method or value from a child component through a ref, customizing what the parent component can access.",
    topic: "advanced hooks",
  },

  {
    id: 31,
    text: "What does `useDebugValue` do in React?",
    options: [
      "Improves performance by debugging values in state",
      "Provides additional debug information for custom hooks in React DevTools",
      "Accesses values from the React context",
      "Memoizes values for better performance",
    ],
    correctAnswer:
      "Provides additional debug information for custom hooks in React DevTools",
    explanation:
      "`useDebugValue` is used inside custom hooks to label them, providing additional debug information for custom hooks in the React DevTools. It aids developers in understanding the purpose of custom hooks.",
    topic: "advanced hooks",
  },

  {
    id: 32,
    text: "What does the `useContext` hook in React allow you to do?",
    options: [
      "Expose functions to a parent component",
      "Share state in the component tree and prevent prop drilling",
      "Customize the instance value when using `React.forwardRef`",
      "Provide additional debug information for custom hooks",
    ],
    correctAnswer:
      "Share state in the component tree and prevent prop drilling",
    explanation:
      "The `useContext` hook allows you to share state in the component tree without prop drilling. It provides a way to access values stored in a context at any level of the component tree.",
    topic: "advanced hooks",
  },

  {
    id: 33,
    text: "How does the `useContext` hook work in React?",
    options: [
      "Manages state logic for functional components",
      "Creates a memoized version of a component",
      "Performs side effects in a functional component",
      "Accesses the nearest common ancestor Provider in the component tree",
    ],
    correctAnswer:
      "Accesses the nearest common ancestor Provider in the component tree",
    explanation:
      "The useContext hook in React is designed to access the nearest common ancestor Provider in the component tree. It provides a way to share data between components without manually passing props through each level of the component tree, a pattern known as 'prop drilling.' \n When a component is wrapped in a Provider component, the useContext hook allows that component to consume the provided context values. It works by finding the nearest Provider ancestor in the component tree and returning its current context value.",
    topic: "advanced hooks",
  },

  {
    id: 34,
    text: "What is the recommended approach for updating arrays in state within a reducer function?",
    options: [
      "Mutate the existing array directly",
      "Create a new array and replace the existing one",
      "Use the splice method to update the array",
      "Use the concat method to add elements to the array",
    ],
    correctAnswer: "Create a new array and replace the existing one",
    explanation:
      "The recommended approach is to create a new array and replace the existing one when updating arrays in state within a reducer function. Mutating the existing array directly can lead to unexpected behavior.",
    topic: "advanced hooks",
  },

  {
    id: 35,
    text: "When might you pass an initializer function to useReducer instead of a direct initial state value?",
    options: [
      "When the initial state is a primitive value",
      "When the initial state is an object with many properties",
      "When the initializer needs information to compute the initial state",
      "When there is no need for an initial state",
    ],
    correctAnswer:
      "When the initializer needs information to compute the initial state",
    explanation:
      "You might pass an initializer function when the initializer needs information to compute the initial state dynamically. This can be more efficient than re-creating the initial state on every render.",
    topic: "advanced hooks",
  },

  {
    id: 36,
    text: "In the context of React.memo, what does 'shallow comparison of props' mean?",
    options: [
      "Comparing only the top-level properties of objects",
      "Comparing deeply nested properties of objects",
      "Ignoring the properties of objects and comparing only primitive values",
      "Ignoring props comparison altogether",
    ],
    correctAnswer: "Comparing only the top-level properties of objects",
    explanation:
      "'Shallow comparison of props' in React.memo means comparing only the top-level properties of objects, not deeply nested ones. It checks if the previous and current props have the same references for the top-level properties.",
    topic: "advanced hooks",
  },
];

export default questionsDraft;
