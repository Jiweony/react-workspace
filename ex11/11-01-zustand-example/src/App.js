import Content from "./hooks/Content";
import ThemeToggle from "./hooks/ThemeToggle";
import useStore from "./hooks/useStore";

export default function App() {
  const {theme, toggleTheme} = useStore();
  return (
    <div>
      <h1>Zustand Theme Example</h1>
      <ThemeToggle/>
      <Content/>
    </div>
  );
}