import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import Api from "./components/api/Api";
import Info from "./components/info/Info.jsx";
import Outro from "./components/Outro";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="bg-stone">
        <Api />
        <Info />
      </div>
      <Outro />
      <Footer />
    </div>
  );
}

export default App;
