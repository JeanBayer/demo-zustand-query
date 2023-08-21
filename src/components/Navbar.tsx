import { useStore } from "../store/useStore";

export const Navbar = () => {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <nav>
      <h1 className="navbar__title">
        Programming Articles in{" "}
        <em className="text">{darkMode ? "Dark" : "Light"}</em> mode
      </h1>
    </nav>
  );
};
