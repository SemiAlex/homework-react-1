import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import ThemeContext from './context/ThemeContext';
import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import AlertMessage from './components/AlertMessage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './static/AboutUs';
import Contacts from './static/Contacts';
import NotFound from './static/NotFound';
import ProfilePage from './static/ProfilePage';


function App() {
  const [theme, setTheme] = useState('bg-light');
  const [profile, setProfile] = useState({name: '', email: ''});
  const [alertText, setAlertText] = useState('');

  return (
    <div className={`m-0-auto ${theme} ${theme === 'bg-light' ? '' : 'text-light'}`}>
      <ThemeContext.Provider value={{ theme, setTheme, profile, setProfile, alertText, setAlertText }}>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<>
              {alertText ? <AlertMessage /> : ''}
              <div className='container'>
                <Products />
              </div>
            </>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
