import React, { useEffect, useState } from "react";
import "../assets/css/TodoList.css";
import TodoItem from "./TodoItem";
import useTodoStore from "../hooks/useTodoStore";
import { fetchTodos } from "../services/api";
import ClipLoader from "react-spinners/ClipLoader";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// 모달이 열릴 때, 스크린 리더가 메인 콘텐츠를 읽지 못하게 하기 위한 설정
Modal.setAppElement("#root");

function TodoList() {
  const { todos, loadTodos, loading, error } = useTodoStore();
  
  // ----- 모달 관련 시작 -----
  const [modalIsOpen, setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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

        {/* ----- spinner ----- */}
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

      {/* ----- modal ----- */}
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form className="insert-form" onSubmit={onSubmit}>
            <label htmlFor="dueDate">마감일을 선택하세요.</label>
            <input
              type="date"
              className="input"
              onChange={onDueDateChange}
              value={dueDate}
            />
            <input
              className="input"
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={value}
            />
          </form>
        </Modal>
      </div>
      {/* <button onClick={Notify}>Notify!</button> */}

      {/* ----- toast ----- */}
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
