import * as React from 'react'
import {BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

import './components/css/footer.css'
import Loading from './components/loading.jsx'
import {Suspense, lazy} from 'react'
import Header from './components/header.jsx';
const OnePost = lazy(() => import ('./components/OnePost'))
const Home = lazy(() => import ('./components/home'))
const Skill = lazy(() => import ('./components/skill'))
const Marketing = lazy(() => import ('./components/marketing'))
const Portfolio = lazy(() => import ('./components/review'))
const Contact = lazy(() => import ('./components/contact'))
const Footer = lazy(() => import ('./components/footer'))
const Posts = lazy(() => import ('./components/Posts'))
function App() {

    return (
        <>  
                <Suspense fallback={<Loading/>}>
                    <Header/>
                    <Router>
                    <Routes>
                        <Route path='*' element={<Home/>}/>
                        <Route path='/skills' element={<Skill/>}/>
                        <Route path='/services' element={<Skill/>}/>
                        <Route path='/experience' element={<Portfolio/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/posts' element={<Posts/>}/>
                        <Route path='/blogs/:slug' element = {<OnePost/>} />
                    </Routes>
                    </Router>
                    <Footer/>
                </Suspense>
        </>
    );
}

export default App;

