import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Content from "@/pages/Content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content/" element={<Content />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
