import React from 'react';

const UserForm = ({ userData, onDataChange }) => {
  const handleInputChange = (field, value) => {
    onDataChange(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const backgroundOptions = [
    { value: 'black', label: 'Black' },
    { value: 'gradient', label: 'Gradient' }
  ];

  return (
    <div className="user-form">
      <h3>Personal Information</h3>
      
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            value={userData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="id">ID Number *</label>
          <input
            type="text"
            id="id"
            value={userData.id}
            onChange={(e) => handleInputChange('id', e.target.value)}
            placeholder="Enter your ID number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number *</label>
          <input
            type="tel"
            id="phoneNumber"
            value={userData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="emergencyContactNumber">Emergency Contact Number *</label>
          <input
            type="tel"
            id="emergencyContactNumber"
            value={userData.emergencyContactNumber}
            onChange={(e) => handleInputChange('emergencyContactNumber', e.target.value)}
            placeholder="Enter emergency contact number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group *</label>
          <select
            id="bloodGroup"
            value={userData.bloodGroup}
            onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
            required
          >
            <option value="">Select blood group</option>
            {bloodGroups.map(group => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="emergencyContactPerson">Emergency Contact Person *</label>
          <input
            type="text"
            id="emergencyContactPerson"
            value={userData.emergencyContactPerson}
            onChange={(e) => handleInputChange('emergencyContactPerson', e.target.value)}
            placeholder="Enter emergency contact person name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="emergencyContactPersonNumber">Emergency Contact Person Number *</label>
          <input
            type="tel"
            id="emergencyContactPersonNumber"
            value={userData.emergencyContactPersonNumber}
            onChange={(e) => handleInputChange('emergencyContactPersonNumber', e.target.value)}
            placeholder="Enter emergency contact person number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="backgroundType">Card Background *</label>
          <select
            id="backgroundType"
            value={userData.backgroundType}
            onChange={(e) => handleInputChange('backgroundType', e.target.value)}
            required
          >
            {backgroundOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserForm;