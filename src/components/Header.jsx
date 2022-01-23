import React, { useEffect, useState } from "react";

function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = () => {
    const updateTheme = theme === "dark" ? "light" : "dark";
    setTheme(updateTheme);
    localStorage.setItem("theme", updateTheme);
  };

  return (
    <div className="hide-at-425px">
      <h2>Header</h2>
      <button onClick={handleTheme}>
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default Header;
