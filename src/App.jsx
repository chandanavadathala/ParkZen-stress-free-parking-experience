import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import OtpVerification from "./pages/OtpVerification"; // 👈 ADD THIS

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/verify-otp" element={<OtpVerification />} /> {/* 👈 ADD THIS */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
