import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { useThemeStore } from "./store/useThemeStore";
import { Toaster } from "react-hot-toast";
import DetailPage from "./pages/DetailPage";
import Footer from "./components/Footer";

function App() {
  const { theme } = useThemeStore();
  return (
    <div
      className="flex flex-col min-h-screen bg-base-200 transition-colors duration-300"
      data-theme={theme}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}

export default App;
