import { memo } from "react";
import { expensiveCalculation } from "../utils/expensiveCalculation";

/* eslint-disable react/prop-types */
function Person({ person, onClick = () => { } }) {
  expensiveCalculation(1, 100) // we can't remove. It is what it is.

  return (
    <button onClick={() => onClick(person.name)}>{person.name}</button>
  );
}

export default memo(Person);
