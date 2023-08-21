import { useStore } from "../store/useStore";

export const DarkModeCheckbox = () => {
  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

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
