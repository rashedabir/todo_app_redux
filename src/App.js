import "./App.css";
import InputBox from "./component/InputBox";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="container App">
      <h2>Todo List</h2>
      <InputBox />
      <TodoList />
      <footer>
        Developed by{" "}
        <a href="https://rashed-abir.web.app/" target="_blank" rel="noreferrer">
          Rashed Abir
        </a>
      </footer>
    </div>
  );
}

export default App;
