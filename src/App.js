
import { useState } from 'react';
import './App.css';
// import LanguageContext from './context/LanguageContext';
import LandingSection from './components/LandingSection';
import Header from './components/Header';
import FeaturesSection from './components/FeaturesSection';


function App() {
  const [activeLanguage ,setActiveLanguage] = useState('EN');
  
  const changeLanguage = (activeLanguage) => {
    // console.log(activeLanguage)
    setActiveLanguage(activeLanguage)
    
  }

  return (
    // <LanguageContext.Provider value={{activeLanguage, changeLanguage:changeLanguage}} >
    // {/* </LanguageContext.Provider> */}
    
    <>
    <Header activeLanguage={activeLanguage}  changeLanguage={changeLanguage} />
    <LandingSection activeLanguage={activeLanguage} />
    <FeaturesSection activeLanguage={activeLanguage} />
    </>
    );
  }
  
  export default App;
  