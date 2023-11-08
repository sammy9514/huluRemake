import { useState } from "react";

export function useColorChange() {
  const [dark, setDark] = useState(false);
  const colorChange = () => {
    setDark(!dark);
  };

  return {
    dark,
    colorChange,
  };
}
