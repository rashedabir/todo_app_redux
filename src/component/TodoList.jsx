import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../actions/todoActions";

function TodoList() {
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {Object.keys(list).length === 0
          ? null
          : list.map((list) => (
              <li key={list.id}>
                <h5> {list.data} </h5>
                <i
                  onClick={() => {
                    dispatch(deleteTodo(list.id));
                  }}
                  className="fas fa-trash-alt"
                ></i>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default TodoList;
