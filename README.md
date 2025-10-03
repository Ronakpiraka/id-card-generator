# Barbarian ID Card Generator

A React-based web application that allows users to create professional ID cards with their photo and personal information.

## Features

- **Image Upload & Cropping**: Upload passport-size photos with 5MB limit and crop them to fit perfectly
- **Complete Form Fields**: Collect all necessary information including:
  - Full Name
  - ID Number
  - Phone Number
  - Emergency Contact Information
  - Blood Group
  - Emergency Contact Person Details
- **Background Options**: Choose between black and gradient card backgrounds
- **ID Card Generation**: Creates professional front and back ID cards
- **Download Options**: Export cards as PDF or JPG files
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technologies Used

- React.js
- react-image-crop (for image cropping)
- html2canvas (for card image generation)
- jsPDF (for PDF generation)
- CSS3 with modern styling

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/id-card-generator.git
```

2. Navigate to the project directory:
```bash
cd id-card-generator
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment

This application can be deployed to various platforms:

- **Netlify**: Connect your Git repository and deploy automatically
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use `gh-pages` package for deployment
- **Firebase Hosting**: Deploy to Firebase

## Usage

1. **Upload Photo**: Click "Choose Photo" to upload your passport-size image (max 5MB)
2. **Crop Image**: Use the cropping tool to adjust your photo to the perfect size
3. **Fill Information**: Complete all required form fields
4. **Select Background**: Choose between black or gradient background
5. **Generate Card**: Click "Generate ID Card" when all fields are complete
6. **Download**: Save your ID card as PDF or JPG

## Card Design

The ID card includes:

**Front Side:**
- Company logo (barbarian.)
- User photo
- Full name and ID number
- Emergency contact number

**Back Side:**
- Company logo
- Instructions for card usage
- Emergency information (blood group, contact person)
- Office address

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For any questions or support, please contact the development team.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
