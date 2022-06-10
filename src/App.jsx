import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Api from "./components/api/Api";

function App() {
  return (
    <div className="text-lg overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="bg-stone">
        <Api />
      </div>
    </div>
  );
}

export default App;
