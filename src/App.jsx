import {
  StickyNavbar,
  Hero,
  Services,
  Projects,
  About,
  AboutMe,
  Contact,
  Footer}
  from './sections/index.js'

function App() {
  return (
    <>
      <StickyNavbar/>
      <main className='pt-32'>
        <Hero/>
        <Services/>
        <Projects/>
        <About/>
        <AboutMe/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
