import { useStore } from "../store";

export const DarkModeCheckbox = () => {
  const [darkMode, toggleDarkMode] = useStore((state) => [
    state.darkMode,
    state.toggleDarkMode,
  ]);

  return (
    <label htmlFor="checkbox" className="button">
      <span className="checkbox__mode--label">Dark Mode</span>
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
