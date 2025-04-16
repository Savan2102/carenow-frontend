import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import FAQ from "./pages/FAQ";
import LearnMore from "./pages/LearnMore";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import InvestorDashboard from "./pages/Dashboard/InvestorDashboard";
import StartupDashboard from "./pages/Dashboard/StartupDashboard";
import DoctorDashboard from "./pages/Dashboard/DoctorDashboard";
import PatientDashboard from "./pages/Dashboard/PatientDashboard";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import NotFound from "./pages/not-found";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/learn-more" element={<LearnMore />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Private Routes */}
      <Route 
        path="/investor-dashboard" 
        element={
          <PrivateRoute role="investor">
            <InvestorDashboard />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/startup-dashboard" 
        element={
          <PrivateRoute role="startup">
            <StartupDashboard />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/doctor-dashboard" 
        element={
          <PrivateRoute role="doctor">
            <DoctorDashboard />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/patient-dashboard" 
        element={
          <PrivateRoute role="patient">
            <PatientDashboard />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/admin-dashboard" 
        element={
          <PrivateRoute role="admin">
            <AdminDashboard />
          </PrivateRoute>
        } 
      />

      {/* Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
