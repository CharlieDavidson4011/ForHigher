import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicLayout from './Components/Layout/Public Layout';
import LandingPage from './Pages/Landing Page/Landing Page';
import ApplicantSignup from './Pages/Applicant Signup/Applicant Signup';
import CompanySignup from './Pages/Company Signup/Company Signup';

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