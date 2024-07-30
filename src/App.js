import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/Pages/AboutPage/AboutUs';
import Academics from './components/Pages/Academics/Academics';
import Admissions from './components/Pages/Admission/Admissions';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import Faculty from './components/Pages/Faculty/Faculty';
import Gallery from './components/Pages/Gallery/Gallery';
import HomePage from './components/Pages/HomePage/HomePage';
import Students from './components/Pages/Student/Students';
import Footer from './components/common/Footer/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/academics' element={<Academics />}/>
        <Route path='/admissions' element={<Admissions />}/>
        <Route path='/faculty' element={<Faculty />}/>
        <Route path='/students' element={<Students />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
