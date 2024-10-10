import React from 'react'
import { useSearchParams } from 'react-router-dom'

function About() {
  const [SearchParams] = useSearchParams();
  console.log(SearchParams.get("detail"))
  
  const detail = SearchParams.get("detail") === "true";
  
  return (
    <>
      <h1>About</h1>
      <p>이 프로젝트는 리액트 라우터 실습 예제입니다.</p>
      {
        detail && <p>추가적인 정보...</p>
      }
    </>
  )
}

export default About