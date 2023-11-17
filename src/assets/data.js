const questions = [
  {
    id: 0,
    text: "How do you pass data from a parent component to a child component in React?",
    options: [
      "Using global variables",
      "Using `setState` method",
      "Using props",
      "Using `render` method",
    ],
    correctAnswer: "Using props",
    explanation:
      "Props are used to pass data from parent to child components in React. They allow the parent component to pass data and behavior to its child components.",
  },

  {
    id: 1,
    text: "Which of the following is used to conditionally render content in React?",
    options: [
      "`if-else` statements",
      "Ternary operator",
      "Logical AND (`&&`) operator",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Conditional rendering in React can be achieved using if-else statements, the ternary operator, and the logical AND (&&) operator.",
  },

  {
    id: 2,
    text: "What is the purpose of the `key` prop when rendering lists in React?",
    options: [
      "To apply CSS styles",
      "To uniquely identify each element in the list",
      "To define the order of elements",
      "To create dynamic elements",
    ],
    correctAnswer: "To uniquely identify each element in the list",
    explanation:
      "The key prop is used to uniquely identify each element in a list. It helps React efficiently update the DOM when the list order changes.",
  },
  {
    id: 3,
    text: "Which hook is used for handling side effects in functional components?",
    options: ["useEffect", "useReducer", "useState", "useContext"],
    correctAnswer: "useEffect",
    explanation:
      "The useEffect hook is used for handling side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.",
  },
  {
    id: 4,
    text: "How do you pass a function as a prop to a child component in React?",
    options: [
      "Use the `bind` method",
      "Use the `callback` attribute",
      "Directly include it in the JSX",
      "Functions cannot be passed as props",
    ],
    correctAnswer: "Directly include it in the JSX",
    explanation:
      "You can pass a function as a prop to a child component by directly including it in the JSX of the parent component.",
  },

  {
    id: 5,
    text: "What is the purpose of the virtual DOM in React?",
    options: [
      "To directly manipulate the actual DOM",
      "To efficiently manage updates to the DOM",
      "To handle routing in React",
      "To define component structure",
    ],
    correctAnswer: "To efficiently manage updates to the DOM",
    explanation:
      "The virtual DOM in React is a lightweight copy of the actual DOM. It is used to efficiently manage updates and improve rendering performance.",
  },

  {
    id: 6,
    text: "How do you use inline styles in JSX?",
    options: [
      "Using the style attribute with a JavaScript object value",
      "Using the `css` attribute",
      "Using the `inline` attribute",
      "Inline styles cannot be applied in JSX",
    ],
    correctAnswer: "Using the style attribute with a JavaScript object value",
    explanation:
      "Inline styles in JSX are applied using the style attribute with a JavaScript object value.",
  },

  {
    id: 7,
    text: "Which method is used to prevent the default behavior of an event in React?",
    options: ["stopPropagation", "preventDefault", "stopEvent", "haltEvent"],
    correctAnswer: "preventDefault",
    explanation:
      "The preventDefault method is used to prevent the default behavior of an event in React, such as preventing a form submission.",
  },

  {
    id: 8,
    text: "What does unidirectional data flow mean in React?",
    options: [
      "Data flows in both directions",
      "Data flows from child to parent components",
      "Data flows in a single, well-defined direction",
      "Data flows randomly",
    ],
    correctAnswer: "Data flows in a single, well-defined direction",
    explanation:
      "Unidirectional data flow in React means that data flows in a single, well-defined direction, typically from parent to child components.",
  },

  {
    id: 9,
    text: "Which hook is used for managing state based on previous state in functional components?",
    options: [
      "useState",
      "useEffect",
      "usePreviousState",
      "There is no built-in hook for managing state based on previous state",
    ],
    correctAnswer:
      "There is no built-in hook for managing state based on previous state",
    explanation:
      "There is no built-in hook called usePreviousState in React. Developers often create custom hooks for managing state based on previous state.",
  },

  {
    id: 10,
    text: "What issue can arise if the `key` prop is not unique within a list of React elements?",
    options: [
      "Improved performance",
      "Unnecessary component re-renders",
      "Predictable component lifecycle",
      "Preventing duplicate state",
    ],
    correctAnswer: "Unnecessary component re-renders",
    explanation:
      "If the key prop is not unique, it can lead to unnecessary component re-renders and affect the efficiency of updates in the DOM.",
  },

  {
    id: 11,
    text: "Why is using array indices as keys generally not recommended in React?",
    options: [
      "It improves component identity",
      "It ensures efficient updates during reconciliation",
      "It may cause incorrect identification of components when the list order changes",
      "It helps with dynamic data updates",
    ],
    correctAnswer:
      "It may cause incorrect identification of components when the list order changes",
    explanation:
      "Using array indices as keys may cause incorrect identification of components when the list order changes, leading to unexpected behavior.",
  },

  {
    id: 12,
    text: 'What does "lifting state up" refer to in React?',
    options: [
      "Elevating the physical location of a React component",
      "Passing data from a child component to a parent component",
      "Moving state to the topmost parent component for shared access",
      "Transferring styles from child to parent components",
    ],
    correctAnswer:
      "Moving state to the topmost parent component for shared access",
    explanation:
      "`Lifting state up` in React refers to moving state to the topmost parent component to share state among sibling components.",
  },

  {
    id: 13,
    text: "In React, why is it beneficial to lift state up to a common ancestor component?",
    options: [
      "To increase component encapsulation",
      "To simplify component structure",
      "To avoid the use of state entirely",
      "To share state among sibling components",
    ],
    correctAnswer: "To share state among sibling components",
    explanation:
      "Lifting state up to a common ancestor component allows sharing state among sibling components, promoting better communication and data flow.",
  },

  {
    id: 14,
    text: "Which of the following is a valid JSX syntax for rendering a dynamic value?",
    options: [
      "<p>Value: {dynamicValue}</p>",
      "<p>Value: [dynamicValue]</p>",
      "<p>Value: {dynamicValue()}</p>",
      "<p>Value: ${dynamicValue}</p>",
    ],
    correctAnswer: "<p>Value: {dynamicValue}</p>",
    explanation:
      "To render a dynamic value in JSX, you use curly braces {} and directly include the JavaScript expression within the curly braces.",
  },

  {
    id: 15,
    text: 'When working with multiple components in React, what does the term "lifting state up" help avoid?',
    options: [
      "Component re-rendering",
      "Event handling issues",
      "Code duplication",
      "Conditional rendering",
    ],
    correctAnswer: "Code duplication",
    explanation:
      "`Lifting state up` helps avoid code duplication when working with multiple components in React.",
  },

  {
    id: 16,
    text: "What is the primary purpose of curly braces `{}` in JSX?",
    options: [
      "To define component styles",
      "To create comments in JSX",
      "To embed JavaScript expressions",
      "To specify boolean attributes",
    ],
    correctAnswer: "To embed JavaScript expressions",
    explanation:
      "Curly braces {} in JSX are used to embed JavaScript expressions, allowing dynamic values or expressions to be included in the JSX markup.",
  },
];

export default questions;
