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
  },
  {
    id: 3,
    text: "Which hook is used for handling side effects in functional components?",
    options: ["useEffect", "useReducer", "useState", "useContext"],
    correctAnswer: "useEffect",
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
  },

  {
    id: 7,
    text: "Which method is used to prevent the default behavior of an event in React?",
    options: ["stopPropagation", "preventDefault", "stopEvent", "haltEvent"],
    correctAnswer: "preventDefault",
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
  },
];

export default questions;
