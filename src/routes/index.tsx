import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import CoinDetailsPage from "../pages/CoinDetails";
import AppLayout from "../layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin/:coinId" element={<CoinDetailsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
