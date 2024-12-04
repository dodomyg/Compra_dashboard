import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SurveyTable from "./components/SurveyTable";
import Info from "./components/Info";
import Guide from "./components/Guide";
import Metrics from "./components/Metrics";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/surveys");
    }
  })
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
      <div className="flex-1 lg:ml-64 p-6 sm:mt-16 md:mt-0">
        <Routes>
          <Route path="/surveys" element={<SurveyTable />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
