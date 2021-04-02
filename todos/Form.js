import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <div>
      <input value={inputText} onChange={inputTextHandler} />
      <button onClick={submitHandler}>add todo</button>
      {
          todos.map((todo)=>{
              return(
                <h3>{todo.text}</h3>

              )

          })
      }
    </div>
  );
};

export default Form;
