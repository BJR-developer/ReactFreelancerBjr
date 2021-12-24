import Header from './components/header.jsx'
import Hero from './components/hero.jsx'
import Skill from './components/skill.jsx'
import Lifestyle from './components/lifestyle'
import Portfolio from './components/portfolio'
import Marketing from './components/marketing'
import Review from './components/review'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'
function App() {
  return (
    <>
    <div className='forbg'>
    <Header/>
    <Hero/>
    </div>
    <Lifestyle/>
    <Skill/>
    <Portfolio />
    <Marketing />
    <Review />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
