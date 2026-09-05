import '../styles/Home.css'
import Hero from '../components/sections/Hero'
import Categories from '../components/sections/Categories'
import Products from '../components/sections/Products'
import Trending from '../components/sections/Trending'
import Benefits from '../components/layout/Benefits'
import Footer from '../components/layout/Footer'


function App() {

  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <Trending />
      <Benefits />
      <Footer />
    </>
  )
}

export default App;