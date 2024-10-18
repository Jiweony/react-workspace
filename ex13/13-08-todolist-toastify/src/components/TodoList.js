import React, { useEffect, useState } from "react";
import "../assets/css/TodoList.css";
import TodoItem from "./TodoItem";
import useTodoStore from "../hooks/useTodoStore";
import { fetchTodos } from "../services/api";
import ClipLoader from "react-spinners/ClipLoader";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function TodoList() {
  const { todos, loadTodos, loading, error } = useTodoStore();
  
  const Notify = () => toast.warn("오늘까지 예정인 할일이 있습니다.");

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  if (error) {
    return (
      <div>
        <span class="material-symbols-outlined">error</span>
        <div style={{ textAlign: "center" }}>
          예상치 못한 오류가 발생하였습니다.
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="todo-list">
        <ClipLoader
          color="#38d9a9"
          loading={loading}
          cssOverride={{
            position: "fixed",
            top: "calc(50% - (35px/2))",
            right: "calc(50% - (35px/2))",
          }}
          size={35}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
            dueDate={todo.due_date}
          />
        ))}
      </div>
      {/* <button onClick={Notify}>Notify!</button> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default TodoList;
