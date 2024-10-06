import { useState } from "react";


export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <h1>Props-based Theme Example</h1>
      <ThemeToggle/>
      <Content/>
    </div>   
  );
}

function ThemeToggle() {
  return(
    <button>dark_mode</button>
  );
}

function Content() {
  return (
    <>
      <p>현재 테마: </p>
      <Box/>
    </>
  );
}

function Box(){
  return (
    <div style={{padding: "20px", backgroundColor:"#333", color:"#ffffff", height:"200px", border:"1px solid"}}>
      상자의 테마는 datk_mode
    </div>
  );
}