import React, { useState } from 'react';
import './CompanyForm.css';

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    fieldOfWork: '',
    currentJobs: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send data to backend
    fetch('http://localhost:5000/api/companies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            companyName: '',
            website: '',
            fieldOfWork: '',
            currentJobs: '',
          });
          setSubmitted(false);
        }, 3000);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="company-form-container">
      <div className="company-form-wrapper">
        <h1>Company Registration</h1>
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop" alt="Professional business woman" className="form-image" />
        
        {submitted && (
          <div className="confirmation-modal">
            <div className="confirmation-content">
              <div className="confirmation-icon">✓</div>
              <h2>Thank You!</h2>
              <p>Your company information has been received successfully.</p>
              <p className="confirmation-detail">Our team will review your company profile and get back to you shortly.</p>
              <p className="confirmation-email">We'll be in touch soon to discuss partnership opportunities.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="company-form">
          {/* Company Name Field */}
          <div className="form-group">
            <label htmlFor="companyName">Company Name *</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Acme Corporation"
              required
            />
          </div>

          {/* Website Field */}
          <div className="form-group">
            <label htmlFor="website">Website *</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="facebook.com or https://www.facebook.com"
              required
            />
          </div>

          {/* Field of Work */}
          <div className="form-group">
            <label htmlFor="fieldOfWork">Field of Work *</label>
            <input
              type="text"
              id="fieldOfWork"
              name="fieldOfWork"
              value={formData.fieldOfWork}
              onChange={handleChange}
              placeholder="e.g., Software Development, Retail, Finance"
              required
            />
          </div>

          {/* Current Jobs */}
          <div className="form-group">
            <label htmlFor="currentJobs">Current Open Positions *</label>
            <textarea
              id="currentJobs"
              name="currentJobs"
              value={formData.currentJobs}
              onChange={handleChange}
              placeholder="List the job titles you're currently hiring for (e.g., Senior Developer, Product Manager, etc.)"
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary btn-submit">
            Submit Company Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyForm;
