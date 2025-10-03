import React, { useState, useCallback, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImageUpload = ({ onImageSelect, selectedImage }) => {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({
    unit: '%',
    width: 90,
    aspect: 3/4, // Passport photo aspect ratio
  });
  const [completedCrop, setCompletedCrop] = useState(null);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);

  const onSelectFile = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.addEventListener('load', () => setSrc(reader.result));
      reader.readAsDataURL(file);
    }
  }, []);

  const onLoad = useCallback((img) => {
    imgRef.current = img.currentTarget;
  }, []);

  const generateCroppedImage = useCallback(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    // Validate that the image is actually loaded
    if (!image.complete || !image.naturalWidth || !image.naturalHeight) {
      alert('Image is still loading. Please wait and try again.');
      return;
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    canvas.toBlob(
      (blob) => {
        const reader = new FileReader();
        reader.onload = () => onImageSelect(reader.result);
        reader.readAsDataURL(blob);
      },
      'image/jpeg',
      0.9
    );
  }, [completedCrop, onImageSelect]);

  return (
    <div className="image-upload-container">
      <h3>Upload Your Photo</h3>
      <div className="upload-section">
        <input 
          type="file" 
          accept="image/*" 
          onChange={onSelectFile}
          className="file-input"
          id="file-input"
        />
        <label htmlFor="file-input" className="file-label">
          Choose Photo (Max 5MB)
        </label>
      </div>

      {src && (
        <div className="crop-section">
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={3/4}
            minWidth={100}
            minHeight={133}
          >
            <img
              ref={imgRef}
              alt="Crop me"
              src={src}
              style={{ maxWidth: '100%', maxHeight: '400px' }}
              onLoad={onLoad}
            />
          </ReactCrop>
          <button onClick={generateCroppedImage} className="crop-btn">
            Crop & Save Image
          </button>
        </div>
      )}

      {selectedImage && (
        <div className="preview-section">
          <h4>Preview:</h4>
          <img 
            src={selectedImage} 
            alt="Cropped preview" 
            className="cropped-preview"
            style={{ width: '150px', height: '200px', objectFit: 'cover' }}
          />
        </div>
      )}

      <canvas
        ref={previewCanvasRef}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageUpload;