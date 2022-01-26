import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";

const Counter = function () {
  const [count, setCount] = useState(0);

  function plus() {
    setCount(count + 1);
  }

  function minus() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <MyButton onClick={plus} style={{marginRight:'5px'}}>+</MyButton>
      <MyButton onClick={minus}>-</MyButton>
    </div>
  );
};

export default Counter;
