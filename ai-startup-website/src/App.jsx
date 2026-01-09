import Navbar from './components/layout/Navbar'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Dashboard />
      </main>
      <Footer />
    </div>
  )
}

export default App