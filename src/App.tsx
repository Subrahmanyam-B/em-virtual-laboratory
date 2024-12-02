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
import GaussLawPage from "./pages/electrostatics/gauss-law";
import ElectricDipolePage from "./pages/electrostatics/electric-dipole";
import GaussLawContdPage from "./pages/maxwell-equations/gauss-law-contd";
import AmpereLawPage from "./pages/maxwell-equations/amperes-law";
import FaradayLawPage from "./pages/maxwell-equations/faradays-law";
import About from "./pages/About";
import GaussLawMagnestismPage from "./pages/maxwell-equations/gauss-law-magnetism";
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

        <Route path="/contributors" element={<Scalars />} />
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
        <Route path="/electrostatics-intro" element={<CoulombsLawPage />} />
        <Route
          path="/electric-field-and-flux-density"
          element={<ElectricFluxPage />}
        />
        <Route path="/field-operations" element={<GradientPage />} />
        <Route path="/electric-potential" element={<ElectricPotentialPage />} />
        <Route path="/gauss-law" element={<GaussLawPage />} />
        <Route path="/gauss-law-contd" element={<GaussLawContdPage />} />
        <Route path="/electric-dipole" element={<ElectricDipolePage />} />
        <Route path="/ampere-law" element={<AmpereLawPage />} />
        <Route path="/faraday-law" element={<FaradayLawPage />} />
        <Route
          path="/gauss-law-magnetism"
          element={<GaussLawMagnestismPage />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      {location.pathname !== "/scalars-and-vectors" && <Footer />}
    </BrowserRouter>
  );
};

export default App;
