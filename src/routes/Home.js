import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
  }
  return (
    <>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write a to do" onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
