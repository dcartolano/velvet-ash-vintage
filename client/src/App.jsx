import './App.css';

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Socials from './components/Socials';

function App() {
    return (
        // <div className="flex-column justify-flex-start min-100-vh">
          <div className="">
            <Header />
            {/* <div className="container"> */}
            <div className="">
                <Outlet />
            </div>
            <Socials />
            <Footer />
        </div>
    );
}

export default App;