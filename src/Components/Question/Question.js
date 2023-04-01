import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div>
      <div className="m-5 text-start">
        <h3 className="ms-5 fw-bold text-danger text-opacity-75">
          Question 1 : What is the diffrence between props and state?
        </h3>
        <h5 className="ms-5 fw-medium text-primary text-opacity-75">
          Answer: State is your data, is mutable, you can do anything you need
          with it, props is read only data, usually when you pass props you have
          already work with your data and you need the child component to render
          it or if your props is a function u call it to perform a task.
        </h5>
        <h3 className="ms-5 fw-bold text-danger text-opacity-75">
          Question 2 : How does useStae work?
        </h3>
        <h5 className="ms-5 fw-medium text-primary text-opacity-75">
          Answer: It returns an array with two values: the current state and a
          function to update it. The Hook takes an initial state value as an
          argument and returns an updated state value whenever the setter
          function is called.
        </h5>
        <h3 className="ms-5 fw-bold text-danger text-opacity-75">
          Question 3 : What does useEffect do without load data?
        </h3>
        <h5 className="ms-5 fw-medium text-primary text-opacity-75">
          Answer: Whenever we need to make use of side effects in our
          application, useEffect is the way to go. This hook doesn't present
          many complications, except for non-primitive data types, due to how
          JavaScript handles them.
        </h5>
        <h3 className="ms-5 fw-bold text-danger text-opacity-75">
          Question 4 : How does React work?
        </h3>
        <h5 className="ms-5 fw-medium text-primary text-opacity-75">
          Answer: ReactJS divides the UI into isolated reusable pieces of code
          known as components. React components work similarly to JavaScript
          functions as they accept arbitrary inputs called properties or props.
          It's possible to have as many components as necessary without
          cluttering your code.
        </h5>
      </div>
    </div>
  );
};

export default Question;
