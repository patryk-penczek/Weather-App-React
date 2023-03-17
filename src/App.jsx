import { useEffect, useState } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import "./styles/index.css";

function App() {
  const [city, setCity] = useState("Warsaw");
  const [language, setLanguage] = useState("en");
  const [data, setData] = useState({});
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=${language}&appid=25d335a5db7cce5fb02b08dfc6049a33`
      );
      const result = await response.json();
      await setData(result);
    })();
  }, [city, language]);

  if (
    theme === "dark" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="relative flex h-vh w-full flex-col items-center justify-center bg-light text-dark dark:bg-dark dark:text-light sm:h-screen">
      {data.name !== undefined && (
        <Container
          data={data}
          setCity={setCity}
          language={language}
          setLanguage={setLanguage}
          theme={theme}
          setTheme={setTheme}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
