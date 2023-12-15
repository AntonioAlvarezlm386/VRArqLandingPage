import {
  Navbar,
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
      <Navbar/>
      <main>
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
