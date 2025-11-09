import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const goApplicant = () => navigate('/signup/applicant');
    const goCompany = () => navigate('/signup/company');

    return (
        <div className="landing-page">
            <header className="hero">
                <h1>Find Your Next Job or Hire Top Talent</h1>
                <p>Join our network of applicants & companies today.</p>
                <div className="cta-buttons">
                    <Button variant="primary" onClick={goApplicant}>Sign up as Applicant</Button>
                    <Button variant="secondary" onClick={goCompany}>Sign up as Company</Button>
                </div>
            </header>
            {/* Add other sections later */}
        </div>
    );
};

export default LandingPage;
