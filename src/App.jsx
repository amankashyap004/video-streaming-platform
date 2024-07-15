import "./App.css";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PricingSection from "./components/PricingSection";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div className="flex flex-col justify-center gap-2 lg:gap-12 bg-gradient-to-t from-[#f4c4f380] to-[#fc67fa80] h-full w-full">
      <Header />
      <FeaturesSection />
      <VideoSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;
