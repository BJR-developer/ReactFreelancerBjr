import * as React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Loading from './components/loading.jsx'
import {Suspense, lazy} from 'react'
import Header from './components/header.jsx'
const Home = lazy(() => import ('./components/home'))
const Skill = lazy(() => import ('./components/skill'))
const Marketing = lazy(() => import ('./components/marketing'))
const Portfolio = lazy(() => import ('./components/review'))
const Contact = lazy(() => import ('./components/contact'))
const Footer = lazy(() => import ('./components/footer'))
const Community = lazy(() => import ('./components/community'))
function App() {
    return (
        <>
            <Router>
                <Suspense fallback={<Loading/>}>
                    <Header/>
                    {/* this routes now no needed */}
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/skills' element={<Skill/>}/>
                        <Route path='/services' element={<Marketing/>}/>
                        <Route path='/experience' element={<Portfolio/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                    </Routes>
                    <Community/>
                    <Footer/>
                </Suspense>
            </Router>
        </>
    );
}

export default App;

