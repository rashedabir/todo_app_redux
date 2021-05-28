import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";

function InputBox() {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const savedData = (e) => {
    e.preventDefault();
    dispatch(addTodo(data));
    setData("");
  };
  return (
    <div className="input-box">
      <form onSubmit={savedData}>
        <input
          type="text"
          className="form-control"
          placeholder="✒ Type"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
}

export default InputBox;
