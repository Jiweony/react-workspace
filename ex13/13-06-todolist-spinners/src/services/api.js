export const fetchTodos = async () => { // 서버에서 전체 데이터 불러오기
  const response = await fetch("http://localhost:4000/todos");
  return response.json();
}

export const toggleTodo = async (id, done) => {
  const response = await fetch(`http://localhost:4000/todos/${String(id)}`,{
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ done: !done })
  });
  if(!response.ok) throw new Error("Failed to toggle todo")
  return response.json();
}

export const removeTodo = async (id) => {
  const response = await fetch(`http://localhost:4000/todos/${String(id)}`,{
    method: "DELETE",
  });
  if(!response.ok) throw new Error("Failed to remove todo")
  return response.json();
}

export const createTodo = async (text) => {
  const response = await fetch(`http://localhost:4000/todos`,{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({  
      text, 
      done: false 
    })
  });
  if(!response.ok) throw new Error("Failed to create todo")
  return response.json();
}