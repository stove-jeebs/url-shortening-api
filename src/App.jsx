import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shorten from "./components/shorten/Shorten";

function App() {
  return (
    <div className="text-lg overflow-x-hidden">
      <Navbar />
      <Hero />
      <Shorten />
    </div>
  );
}

export default App;
