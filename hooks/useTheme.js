import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// export function useTheme() {
//   // const [isDark, setIsDark] = useContext(ThemeContext);
//   // return[isDark,setIsDark]
//   return useContext(ThemeContext);
// }

export const useTheme = ()=>useContext(ThemeContext)