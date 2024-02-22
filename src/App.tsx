import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Content from "@/pages/Content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentLayout from "@/pages/ContentLayout";
import Scalars from "./pages/vector-algebra/scalars";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content/" element={<ContentLayout />}>
          <Route path=":id/" element={<Content />} />
        </Route>
        <Route path="/scalars-and-vectors" element={<Scalars />} />
      </Routes>
      {location.pathname !== "/scalars-and-vectors" && <Footer />}
    </BrowserRouter>
  );
};

export default App;
