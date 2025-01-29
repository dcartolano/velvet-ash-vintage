import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        // <div className="flex-column justify-flex-start min-100-vh">
          <div className="">
            <Header />
            {/* <div className="container"> */}
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;