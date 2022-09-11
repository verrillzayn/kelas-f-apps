import Navigasi from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fancyapps/ui/dist/fancybox.css';
import './App.css';
import './style.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Jadwal from './components/Jadwal';
import ListTugas from './components/ListTugas';
import Absen from './components/absen/Absen';

function App() {
  return (
    <div>
      <Navigasi />
      <Content />
      <Routes>
        <Route path="/kelas-f-apps" element={<Home />} />
        <Route path="/kelas-f-apps/jadwal-kelas" element={<Jadwal />} />
        <Route path="/kelas-f-apps/list-tugas" element={<ListTugas />} />
        <Route path="/kelas-f-apps/daftar-hadir" element={<Absen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
