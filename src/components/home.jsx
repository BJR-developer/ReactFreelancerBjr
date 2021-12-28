import React from 'react'
import {Suspense, lazy} from 'react'
import Loading from './loading'

const Hero = lazy(() => import ('./hero'))
const Skill = lazy(() => import ('./skill'))
const Marketing = lazy(() => import ('./marketing'))
const Lifestyle = lazy(() => import ('./lifestyle'))
const Portfolio = lazy(() => import ('./review'))
const Review = lazy(() => import ('./portfolio'))
const Contact = lazy(() => import ('./contact'))
export default function Home() {
    return (
        <Suspense fallback={<Loading/>}>
        <div className='home'>
               <div className='forbg'>
                            <Hero/>
                        </div>
                        <Lifestyle/>
                        <Skill/>
                        <Portfolio/>
                        <Marketing/>
                        <Review/>
                        <Contact/>
        </div>
        </Suspense>
    )
}
