import { useStore } from "../store";

export const Navbar = () => {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <nav>
      <h1>
        Programming Languages in <em>{darkMode ? "Dark" : "Light"}</em> mode
      </h1>
    </nav>
  );
};
