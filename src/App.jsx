import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './assets/Views/HomeView';
import AboutMeView from './assets/Views/AboutMeView';
import NeurodiversityView from './assets/Views/NeurodiversityView';
import ServiceView from './assets/Views/ServiceView';
import ForoView from './assets/Views/ForoView';
import AgoraView from './assets/Views/AgoraView';
import TeaView from './assets/Views/TeaView';
import Tda_TdhView from './assets/Views/Tda_TdhView';
import TransAprendizajeView from './assets/Views/TransAprendizajeView';
import TransMadurativoView from './assets/Views/TransMadurativoView';
import NavBar from './assets/Components/NavBar/NavBar';
import Footer from './assets/Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/AboutMe" element={<AboutMeView />} />
        <Route path="/Neurodiversity" element={<NeurodiversityView />} />
        <Route path="/Services" element={<ServiceView />} />
        <Route path="/Foro" element={<ForoView />} />
        <Route path="/Agora" element={<AgoraView />} />
        <Route path="/Tea" element={<TeaView />} />
        <Route path="/Tda_Tdh" element={<Tda_TdhView />} />
        <Route path="/Aprendizaje" element={<TransAprendizajeView />} />
        <Route path="/Madurativo" element={<TransMadurativoView />} />
      </Routes>
     
    </>
  );
  
};

export default App;
