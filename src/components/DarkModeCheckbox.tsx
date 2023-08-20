import { useStore } from "../store";

export const DarkModeCheckbox = () => {
  const [darkMode, toggleDarkMode] = useStore((state) => [
    state.darkMode,
    state.toggleDarkMode,
  ]);

  return (
    <label htmlFor="checkbox" className={"checkbox--mode"}>
      <span>{darkMode ? "Dark Mode ON" : "Click to enable Dark Mode"}</span>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
    </label>
  );
};
