import "./App.css";

import Hero from "./pages/home/sections/Hero";
import Feature from "./pages/home/sections/Feature";
import About from "./pages/home/sections/About";
import Offerings from "./pages/home/sections/Offerings";

function App() {
  return (
    <div>
      <Hero />
      <div className="container">
        <Feature />
      </div>
      <Offerings />
      <div className="container">
        <About />
      </div>
    </div>
  );
}

export default App;
