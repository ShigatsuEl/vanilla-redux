import { configureStore, createSlice } from "@reduxjs/toolkit";

// createSlice()메서드는 reducer를 생성해줄 뿐만 아니라 action도 같이 만들어준다. 제일 짧은 코드로 state를 관리할 수 있음
// 궁금하면 console로 toDos.reducer & toDos.actions 찍어보기 바람
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// configureStore를 사용해 store를 생성하게 되면 configureStore 옵션 중 devTools가 자동으로 설정되어 React Dev Tools가 자동적으로 켜지는 것을 확인할 수 있다.
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
