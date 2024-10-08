import useStore from "./useStore";

export default function ThemeToggle(){
  const {theme, toggleTheme} = useStore();
  return <button onClick={toggleTheme}>{theme}</button>
}