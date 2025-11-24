import React, { useState } from 'react';
import './ApplicantForm.css';

const ApplicantForm = () => {
  const [formData, setFormData] = useState({
    needsAssistance: false,
    name: '',
    phone: '',
    desiredRole: '',
    desiredSalary: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('🚀 Submitting applicant form:', formData);
    
    // Send data to backend
    fetch('http://localhost:5000/api/applicants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => {
        console.log('📡 Response status:', res.status);
        return res.json();
      })
      .then(data => {
        console.log('✓ Response data:', data);
        setSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            needsAssistance: false,
            name: '',
            phone: '',
            desiredRole: '',
            desiredSalary: '',
          });
          setSubmitted(false);
        }, 3000);
      })
      .catch(error => {
        console.error('❌ Fetch error:', error);
        alert('Error submitting form: ' + error.message);
      });
  };

  return (
    <div className="applicant-form-container">
      <div className="applicant-form-wrapper">
        <h1>Applicant Sign Up</h1>
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" alt="Smiling applicant" className="form-image" />
        
      {submitted && (
        <div className="confirmation-modal">
          <div className="confirmation-content">
            <div className="confirmation-icon">✓</div>
            <h2>Thank You!</h2>
            <p>Your information has been received successfully.</p>
            <p className="confirmation-detail">We'll review your application and get back to you shortly.</p>
            <p className="confirmation-email">A confirmation email has been sent to your contact number.</p>
          </div>
        </div>
      )}

        <form onSubmit={handleSubmit} className="applicant-form">
          {/* Assistance Section */}
          <div className="form-section assistance-section">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="needsAssistance"
                checked={formData.needsAssistance}
                onChange={handleChange}
              />
              <span className="checkbox-text">
                Do you need assistance filling out this form?
              </span>
            </label>
            {formData.needsAssistance && (
              <p className="assistance-info">
                We're here to help! Our support team is available at support@forhigher.com or call 1-800-HIGHER-1.
              </p>
            )}
          </div>

          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              required
            />
          </div>

          {/* Desired Role Field */}
          <div className="form-group">
            <label htmlFor="desiredRole">Desired Role *</label>
            <input
              type="text"
              id="desiredRole"
              name="desiredRole"
              value={formData.desiredRole}
              onChange={handleChange}
              placeholder="e.g., Frontend Developer, Product Manager"
              required
            />
          </div>

          {/* Desired Salary Field */}
          <div className="form-group">
            <label htmlFor="desiredSalary">Desired Salary (Annual) *</label>
            <input
              type="text"
              id="desiredSalary"
              name="desiredSalary"
              value={formData.desiredSalary}
              onChange={handleChange}
              placeholder="e.g., $80,000 - $120,000"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary btn-submit">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicantForm;
