import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Content from "@/pages/Content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentLayout from "@/pages/ContentLayout";
import Scalars from "./pages/vector-algebra/scalars";
import VectorAdditionPage from "./pages/vector-algebra/addition";
import VectorMultiplicationPage from "./pages/vector-algebra/multiplication";
import ScrollToTop from "./lib/scrollToTop";
import TripleProductPage from "./pages/vector-algebra/triple-product";
import VectorCalculusIntro from "./pages/vector-calculus/vector-calculus-intro";
import CylindricalCoordinatesPage from "./pages/vector-calculus/cylindrical-coordinates";
import SphericalCoordinatesPage from "./pages/vector-calculus/spherical-coordinates";
import DelOperatorPage from "./pages/vector-calculus/del-operator";
import CoulombsLawPage from "./pages/electrostatics/coulombs-law";
import ElectricFluxPage from "./pages/electrostatics/electric-flux";
import GradientPage from "./pages/electrostatics/gradient";
import ElectricPotentialPage from "./pages/electrostatics/electric-potential";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content/" element={<ContentLayout />}>
          <Route path=":id/" element={<Content />} />
        </Route>
        <Route path="/scalars-and-vectors" element={<Scalars />} />
        <Route path="/vector-addition" element={<VectorAdditionPage />} />
        <Route
          path="/vector-multiplication"
          element={<VectorMultiplicationPage />}
        />
        <Route path="/triple-product" element={<TripleProductPage />} />
        <Route
          path="/vector-calculus-intro"
          element={<VectorCalculusIntro />}
        />
        <Route
          path="/cylindrical-coordinates"
          element={<CylindricalCoordinatesPage />}
        />
        <Route
          path="/spherical-coordinates"
          element={<SphericalCoordinatesPage />}
        />
        <Route path="/del-operator" element={<DelOperatorPage />} />
        <Route path="/electrostatics-intro" element={<CoulombsLawPage/>} />
        <Route path="/electric-field-and-flux-density" element={<ElectricFluxPage/>} />
        <Route path="/field-operations" element={<GradientPage/>} />
        <Route path="/electric-potential" element={<ElectricPotentialPage />} />
      </Routes>
      {location.pathname !== "/scalars-and-vectors" && <Footer />}
    </BrowserRouter>
  );
};

export default App;
