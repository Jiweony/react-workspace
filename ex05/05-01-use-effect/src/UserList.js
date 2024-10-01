import React, { useEffect } from 'react'

function User({user, onRemove, onToggle}){
  /**
   * [] : 최초 렌더링 때 한번 실행
   * 의존성 배열이 없는 경우 : 항상 실행
   * [props 또는 state 값] : 해당 값이 변경될 때만 실행
   */
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    console.log("useEffect가 종료시 사용자 정보 : ", user.name, user.active)
    return () => {
      console.log("컴포넌트가 화면에서 사라짐"); // 함수가 종료될 때 실행
    }
  }, [user]); // 콜백, 의존성 배열(dependency array)
  return (
    <div>
      <b style={{cursor: 'pointer', color: user.active ? 'green' : 'black'}} onClick={()=>onToggle(user.id)}>{user.username}</b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  )
}

function UserList({users, onRemove, onToggle}) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  )
}

export default UserList