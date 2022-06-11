import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Api from "./components/api/Api";
import Info from "./components/info/Info.jsx";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="bg-stone">
        <Api />
        <Info />
      </div>
    </div>
  );
}

export default App;
