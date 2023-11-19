import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/Theme-provider";
import Path from "./routes/Path";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-5 my-5 px-5">
        <Navbar />
        <Path />
      </div>
    </ThemeProvider>
  );
};

export default App;
