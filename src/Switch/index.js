import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme} // Use toggleTheme directly as the event handler
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
