import React, { useState } from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';
import UserForm from './components/UserForm';
import IDCardPreview from './components/IDCardPreview';

function App() {
  const [userImage, setUserImage] = useState(null);
  const [userData, setUserData] = useState({
    fullName: '',
    id: '',
    phoneNumber: '',
    emergencyContactNumber: '',
    bloodGroup: '',
    emergencyContactPerson: '',
    emergencyContactPersonNumber: '',
    backgroundType: 'black'
  });
  const [showPreview, setShowPreview] = useState(false);

  const isFormValid = () => {
    return userImage && 
           userData.fullName && 
           userData.id && 
           userData.phoneNumber &&
           userData.emergencyContactNumber &&
           userData.bloodGroup &&
           userData.emergencyContactPerson &&
           userData.emergencyContactPersonNumber;
  };

  const handleGenerateCard = () => {
    if (isFormValid()) {
      setShowPreview(true);
    }
  };

  const handleBackToForm = () => {
    setShowPreview(false);
  };

  return (
    <div className="App">
      {!showPreview ? (
        <div className="form-container">
          <header className="app-header">
            <h1>Barbarian ID Card Generator</h1>
            <p>Create your professional ID card</p>
          </header>
          
          <div className="form-content">
            <ImageUpload 
              onImageSelect={setUserImage}
              selectedImage={userImage}
            />
            
            <UserForm 
              userData={userData}
              onDataChange={setUserData}
            />
            
            <button 
              className={`generate-btn ${isFormValid() ? 'active' : 'inactive'}`}
              onClick={handleGenerateCard}
              disabled={!isFormValid()}
            >
              Generate ID Card
            </button>
          </div>
        </div>
      ) : (
        <IDCardPreview 
          userImage={userImage}
          userData={userData}
          onBack={handleBackToForm}
        />
      )}
    </div>
  );
}

export default App;
