import { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })
 
  const {username, email} = inputs; //destructuring

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs, [name]: value
    })
  }

  const [users, setUsers] = useState(
    [
      {
        id: 1,
        username: '오일남',
        email: 'o1@example.com',
        active: false
      },
      {
        id: 2,
        username: '오이남',
        email: 'o2@example.com',
        active: false
      },
      {
        id: 3,
        username: '오삼남',
        email: 'o3@example.com',
        active: false
      },
    ]
  );

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username: username,
      email: email,
    }
    setUsers([...users, user]);
    nextId.current += 1;
  }

  const onRemove = (id) => {
    console.log(`${username} onRemove!!`);
    console.log(users.filter(user => user.id !== id));
  }

  const onToggle = (id) => {
    setUsers(
      users.map(user => user.id === id ? {...user, active: !user.active} : user)
    )
  }

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
