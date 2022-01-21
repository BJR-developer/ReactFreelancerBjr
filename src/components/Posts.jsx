import React , {useState ,useEffect} from 'react'
import uniqid from 'uniqid';
import {Link, animateScroll } from 'react-scroll'
import './css/blog.css'
import blogData from './loopcomponents/blog/blogData';
import { BlogLoop } from './loopcomponents/blog/BlogLoop';

 const Posts = () => {
    const [count , setCount] = useState(48);
    
    const increment = () =>{
       setCount(count+12)
       animateScroll.scrollTo(800)
    }
   return (
       <section id="blogs" className='smallblog'>
           <div className='section-title'>LAST UPDATE</div>
           <div className='blog-container'>
               <ul>
               {
                   blogData.slice(0,count).map((data)=>{
                       return(
                           <BlogLoop 
                           key={uniqid()}
                           img={data.img}
                           category={data.category}
                           title={data.title}
                           description={data.desc}
                           />
                       )
                   })
               }
                
               </ul>
           </div>
           <Link to='loadmore' smooth={true}><button id='loadmore' onClick={increment} className='loadmore'>LOAD MORE</button></Link>
       </section>
   )
};
export default Posts;