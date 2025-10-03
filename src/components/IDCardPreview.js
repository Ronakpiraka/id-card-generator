import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import barbarianLogo from '../assets/barb-old-logo-4.png';

const IDCardPreview = ({ userImage, userData, onBack }) => {
  const frontCardRef = useRef(null);
  const backCardRef = useRef(null);

  const getBackgroundStyle = () => {
    if (userData.backgroundType === 'gradient') {
      return {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      };
    }
    return {
      background: '#000000'
    };
  };

  const downloadAsImage = async (format = 'jpeg') => {
    try {
      // Capture front card
      const frontCanvas = await html2canvas(frontCardRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true
      });

      // Capture back card
      const backCanvas = await html2canvas(backCardRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true
      });

      // Create a combined canvas
      const combinedCanvas = document.createElement('canvas');
      const ctx = combinedCanvas.getContext('2d');
      
      // Set canvas size for both cards side by side
      combinedCanvas.width = frontCanvas.width + backCanvas.width + 20; // 20px gap
      combinedCanvas.height = Math.max(frontCanvas.height, backCanvas.height);
      
      // Fill background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, combinedCanvas.width, combinedCanvas.height);
      
      // Draw front card
      ctx.drawImage(frontCanvas, 0, 0);
      
      // Draw back card
      ctx.drawImage(backCanvas, frontCanvas.width + 20, 0);

      // Download combined image
      const link = document.createElement('a');
      link.download = `id-card-${userData.id}.${format}`;
      link.href = combinedCanvas.toDataURL(`image/${format}`);
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Error generating image. Please try again.');
    }
  };

  const downloadAsPDF = async () => {
    try {
      // Capture front card
      const frontCanvas = await html2canvas(frontCardRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true
      });

      // Capture back card
      const backCanvas = await html2canvas(backCardRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Add front card
      const frontImgData = frontCanvas.toDataURL('image/jpeg');
      // Standard ID card size is 85.6mm x 54mm (CR80 size)
      pdf.addImage(frontImgData, 'JPEG', 20, 50, 54, 85.6);

      // Add back card
      const backImgData = backCanvas.toDataURL('image/jpeg');
      pdf.addImage(backImgData, 'JPEG', 120, 50, 54, 85.6);

      pdf.save(`id-card-${userData.id}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <div className="id-card-preview">
      <div className="preview-header">
        <button onClick={onBack} className="back-btn">← Back to Form</button>
        <h2>Your ID Card Preview</h2>
        <div className="download-buttons">
          <button onClick={() => downloadAsImage('jpeg')} className="download-btn">
            Download JPG
          </button>
          <button onClick={downloadAsPDF} className="download-btn">
            Download PDF
          </button>
        </div>
      </div>

      <div className="cards-container">
        {/* Front Card */}
        <div ref={frontCardRef} className="id-card front-card" style={getBackgroundStyle()}>
          <div className="card-header">
            <div className="logo">
              <img 
                src={barbarianLogo} 
                alt="Barbarian Logo" 
                className="logo-image" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.error('Logo failed to load');
                }}
              />
            </div>
          </div>
          
          <div className="card-content">
            <div className="photo-section">
              <div className="photo-frame">
                <img 
                  src={userImage} 
                  alt="User" 
                  className="user-photo" 
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSI1MCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Tm8gSW1hZ2U8L3RleHQ+PC9zdmc+';
                    console.error('User photo failed to load');
                  }}
                />
              </div>
            </div>
            
            <div className="info-section">
              <h3 className="user-name">{userData.fullName}</h3>
              <p className="user-id">ID: {userData.id}</p>
            </div>
          </div>

          <div className="card-footer">
            <p className="emergency-contact">Emergency Contact: {userData.emergencyContactNumber}</p>
          </div>
        </div>

        {/* Back Card */}
        <div ref={backCardRef} className="id-card back-card" style={getBackgroundStyle()}>
          <div className="card-header">
            <div className="logo">
              <img 
                src={barbarianLogo} 
                alt="Barbarian Logo" 
                className="logo-image" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.error('Logo failed to load');
                }}
              />
            </div>
          </div>

          <div className="back-content">
            <div className="instructions">
              <h4>Instructions:</h4>
              <ul>
                <li>This card is an important piece of your identity at Barbarian at all times while office premises.</li>
                <li>Display your card at all times inside office premises for identification purpose.</li>
                <li>This card should be returned to the right authority and a new card should be obtained as necessary.</li>
                <li>Lost card will be replaced at a nominal fee as charged by the company.</li>
              </ul>
            </div>

            <div className="emergency-info">
              <h4>Emergency Information:</h4>
              <div className="emergency-details">
                <p><strong>Blood Group:</strong> {userData.bloodGroup}</p>
                <p><strong>Contact Person:</strong> {userData.emergencyContactPerson}</p>
                <p><strong>Contact Number:</strong> {userData.emergencyContactPersonNumber}</p>
              </div>
            </div>

            <div className="office-address">
              <p><strong>Plot No:</strong> 3WC, 2nd, 5th, 2ND Floor, Knowledge city, Sector-81, HITEC City, Serilingampally, Hyderabad, Telangana - 500081</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCardPreview;