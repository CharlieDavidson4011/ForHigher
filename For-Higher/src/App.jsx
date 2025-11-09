import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicLayout from './components/Layout/PublicLayout';
import LandingPage from './pages/Landing/LandingPage';
import ApplicantSignup from './pages/SignupApplicant/ApplicantSignup';
import CompanySignup from './pages/SignupCompany/CompanySignup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup/applicant" element={<ApplicantSignup />} />
          <Route path="/signup/company" element={<CompanySignup />} />
        </Route>
        {/* Future: add private/authenticated routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;