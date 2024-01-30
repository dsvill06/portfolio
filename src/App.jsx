import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Footer
} from './components';
import Fiverr from './components/Fiverr';
import BlogPage from './pages/BlogPage';
import CompanyPage from './pages/CompanyPage';

import Homepage from './pages/Homepage';

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/company" element={<CompanyPage/>}/>
        <Route exact path="/blog" element={<BlogPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
