import { create } from "zustand";
import { fetchTodos, toggleTodo, removeTodo, createTodo } from "../services/api";

const handleApiCall = async (set, apiFunction, onSuccess) => {
  set({ loading: true, error: null });
  try {
    const result = await apiFunction();
    if (onSuccess) onSuccess(result); // null, undefined 가 아니면~ 실행
  } catch (error) {
    set({ error: error.message });
  } finally {
    set({ loading: false });
  }
};

const useTodoStore = create((set) => ({
  todos: [],
  loading: false,
  error: null,

  setTodos: (todos) => set({ todos }),

  loadTodos: async () => {
    await handleApiCall(set, fetchTodos, (todos) => set({ todos }));
  },

  handleToggleTodo: async (id, done) => {
    await handleApiCall(
      set,
      () => toggleTodo(id, done),
      () => useTodoStore.getState().loadTodos()
    ); // 함수를 파라미터로 넘겨야 함
  },

  handleRemoveTodo: async (id) => {
    await handleApiCall(
      set,
      () => removeTodo(id),
      () => useTodoStore.getState().loadTodos()
    );
  },

  handleCreateTodo: async (text) => {
    await handleApiCall(
      set,
      () => createTodo(text),
      () => useTodoStore.getState().loadTodos()
    );
  }
}));

export default useTodoStore;
