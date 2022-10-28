//Router
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

//components import 

import Nav from './components/Nav';
import MainPage from './components/pages/MainPage';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact'
import { ThemeProvider } from './components/darkMode';
import PdfFile from './components/Pdf';
function App() {

  return (

    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="Resume" element={<PdfFile />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>


  );
}

export default App;
