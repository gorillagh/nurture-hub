import "./App.css";

import Hero from "./pages/home/sections/Hero";
import Feature from "./pages/home/sections/Feature";

function App() {
  return (
    <div>
      <Hero />
      <div className="container">
        <Feature />
      </div>
    </div>
  );
}

export default App;
