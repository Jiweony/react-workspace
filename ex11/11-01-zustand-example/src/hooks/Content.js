import Box from "./Box";
import useStore from "./useStore";

export default function Content(){
  const {theme} = useStore();

  return (
    <>
      <p>{theme}</p>
      <Box/>
    </>
  )
}