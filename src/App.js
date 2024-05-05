import './App.css';
import './components/buttons.css'
import './components/Card.css';
import './pages/Home.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import data from './data/data';
import Home from './pages/Home';
import Footer from './Footer';
import Header from './Header';

function App() {
    const paths = data.map(route => {
        return (
            <Route key={route.id} path={route.path} element={<route.func data={route}/>} />
        )
    })
    return (
        <div className='app'>
            <BrowserRouter>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        {paths}
                    </Routes>
                </main>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App;