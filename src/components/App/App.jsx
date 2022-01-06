import Shop from "../Shop/Shop";
import { ThemeContext, themes } from "context/themecontext";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () =>
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  console.log(`theme`, theme);

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Shop />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
