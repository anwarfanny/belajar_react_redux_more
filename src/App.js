import React from "react";
import "./App.css";
import Footer from "./component/Footer/Footer";
import AddTodo from "./container/AddTodo/AddTodo";
import visibleTodoList from "./container/visibleTodoList/visibleTodoList";

function App() {
  return (
    <div>
      <AddTodo />
      <visibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
