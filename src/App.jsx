import './App.css'

// import della libreria di routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import del layout
import DefaultLayout from './layouts/DefaultLayout';


// importiamo le pagine di riferimento
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contacts" element={<ContactPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
