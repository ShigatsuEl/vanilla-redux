import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

/* const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      console.log(action);
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
}; */

// createReducer를 사용하면 state를 mutate하기 쉽게 만들어준다.
// Redux Toolkit은 mutate한 state를 가져가서 뒤에서 우리가 예전에 했던 unmutate한 상태로 바꿔준다. 이것은 Redux Toolkit이 immer이란 것 뒤에서 동작하기 때문이다.
// push는 mutate한 메서드이기 때문에 return값이 없어 state를 return하게 되면 문제가 생긴다. 반면에 filter같은 unmutate한 메서드는 return값이 반환하기 때문에 state를 return해줘도 문제가 생기지 않는다.
// 즉, state object를 mutate를 하거나 새로운 state object를 리턴하는 것! 둘을 잘 비교해서 사용해야 한다.
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
