import React from 'react'
import {Suspense, lazy} from 'react'
import Loading from './loading'


const Hero = lazy(() => import ('./hero'))
const Blog = lazy(()=>import ('./Blog'))
const Skill = lazy(() => import ('./skill'))
const Marketing = lazy(() => import ('./marketing'))
const Lifestyle = lazy(() => import ('./lifestyle'))
const Portfolio = lazy(() => import ('./review'))
const Review = lazy(() => import ('./portfolio'))
const Contact = lazy(() => import ('./contact'))
const Community = lazy(() => import ('./community'))
export default function Home() {
    return (
        <Suspense fallback={<Loading/>}>
        <div className='home w3-animate-fade'>
               <div className='forbg'>
                            <Hero/>
                        </div>
                        <Lifestyle/>
                        <Skill/>
                        <Portfolio/>
                        <Blog/>
                        <Marketing/>
                        <Review/>
                        <Contact/>
                        <Community/>
        </div>
        </Suspense>
    )
}
