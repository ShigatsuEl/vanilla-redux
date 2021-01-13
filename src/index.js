import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "PLUS") {
    return count + 1;
  }
  if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => (number.innerText = countStore.getState());

countStore.subscribe(onChange);

const handlePlus = () => countStore.dispatch({ type: "PLUS" });
const handleMinus = () => countStore.dispatch({ type: "MINUS" });

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
