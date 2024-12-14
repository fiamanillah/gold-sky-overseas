import { Outlet } from 'react-router-dom';
import Navbar from './components/Header';
import HeaderInfo from './components/HeaderInfo';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <div className="prose max-w-none ">
            <HeaderInfo />
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
