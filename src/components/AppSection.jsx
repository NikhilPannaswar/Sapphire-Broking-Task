// import React from 'react';
// import './AppSection.css';

// // App Section Component
// const AppSection = () => {
//   return (
//     <>
//       <section className="app-section">
//         <div className="app-container">
//           <div className="app-content">
//             <h2>Clearmind, your partner in mental wellness.</h2>
//             <p>Track and track your mental wellness from anywhere with our powerful mobile application.</p>
//             <div className="app-buttons">
//               <a href="#" className="app-btn">
//                 📱 App Store
//               </a>
//               <a href="#" className="app-btn">
//                 🤖 Google Play
//               </a>
//             </div>
//           </div>
          
//           <div className="phone-mockup">
//             <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop" alt="Mobile app mockup" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AppSection; 




import React from 'react';
import './AppSection.css';

const AppSection = () => {
  return (
    <div className="app-section">
      <section className="app-promotion">
      <div className="app-promotion-container">
        <div className="app-promotion-content">
          <div className="app-promotion-text">
            <h2 className="app-promotion-title">
              Clearmind, 
              <span className="app-promotion-title-italic">
                your partner
              </span>
              {' '}in mental wellness.
            </h2>
            <p className="app-promotion-description">
              Find and book your favorite yoga classes from anywhere with our yoga app.
            </p>
            <div className="app-promotion-buttons">
              <div className="app-store-container">
                <div className="app-store-button">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/44118a6a381fb08c8a5f1ea6416cb7cad3c44783?placeholderIfAbsent=true"
                    className="app-store-image"
                    alt="App Store download"
                  />
                </div>
                <div className="google-play-button">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/06f339654269849ddf43633678c1aacc7b28aeb6?placeholderIfAbsent=true"
                    className="google-play-image"
                    alt="Google Play download"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-promotion-image-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b9a17145badeb748988a822ccc74a18e0bdd1b?placeholderIfAbsent=true"
            className="app-promotion-image"
            alt="Mobile app preview"
          />
        </div>
      </div>
    </section>
    </div>
  );
};


export default AppSection;