import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Marriage } from './pages/services/Marriage';
import { Education } from './pages/services/Education';
import { Ramadan } from './pages/services/Ramadan';
import { Funeral } from './pages/services/Funeral';
import { Display } from './pages/Display';
import { Admin } from './pages/Admin';
import { ThankYou } from './pages/ThankYou'; // Import ThankYou page

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/marriage" element={<Marriage />} />
            <Route path="/services/education" element={<Education />} />
            <Route path="/services/ramadan" element={<Ramadan />} />
            <Route path="/services/funeral" element={<Funeral />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/thank-you" element={<ThankYou />} /> {/* Add ThankYou route */}
          </Route>
          <Route path="/display" element={<Display />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
