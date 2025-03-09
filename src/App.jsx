import { useState } from 'react'
import { Menu, X, ArrowRight, Star, Play, Instagram, Twitter, Linkedin ,MoveUpRight} from 'lucide-react';
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-white z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold">MOSEWORKS</h1>
            </div>
            <div>
              <img src="logo.png" alt="" />
            </div>
            <div className="flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="py-20">
            <div className='flex'>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Shaping the Digital Horizon with Superior Creativity and Precision®
            </h1>
            <p className='flex text-center'>Mosework is a 360 digital production house</p>
            <div className='rounded-full bg-black flex w-[60px] h-[40px] mt-[100px]'>
          
            <MoveUpRight className='text-white justify-center m-auto'/>
            </div>
            </div>
            
            <hr></hr>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
              <div className="text-6xl font-bold">573</div>
              <div className="text-6xl">*</div>
              <div className="text-sm">
                Total number of clients we have handled so far
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
                  alt="Digital Design"
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>
              <div className="space-y-4">
                <div className="text-sm">Services:</div>
                <ul className="space-y-2">
                  <li>Strategic Design Partner</li>
                  <li>Digital Production House</li>
                  <li>Content Production</li>
                </ul>
              </div>
            </div>
    <div className='flex '>
            <p className="text-xl mt-16">
              We're a studio with a rich blend of backgrounds, dedicated to supporting
              companies and organizations in all things creative, artistic, and technological.
              Our passion for our craft drives us to embrace innovation through our process.
            </p>
            <img src="logo.png" alt=""  className='ml-[100px] mt-[80px]'/>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
           <span className='text-zinc-400'> WE'RE A </span>CREATIVE<br />
            AGENCY <span className='text-zinc-400'>THAT</span><br />
            <span className='text-zinc-400'>BREAKS </span>DESIGN<br />
            <span className='text-zinc-400'>STANDARDS</span>
          </h2>
          <div className="flex items-center space-x-4 mt-8">
            <Instagram className="h-6 w-6" />
            <Twitter className="h-6 w-6" />
            <Linkedin className="h-6 w-6" />
            <Play className="h-6 w-6 bg-white text-black rounded-full p-1 text-2xl fill-black " /><h4 className='text-sm'>watch <br></br>showree!</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12  ">
            <div className='flex   justify-between w-[80vw]'>
              <div>
              <h3 className="text-xl font-bold mb-4 ml-0">Join our newsletter to</h3>
              <p className="mb-4">keep up to date with us!</p>
              </div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-2 py-1 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="px-6 py-1 bg-green-500 text-white rounded-r-lg hover:bg-green-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li>Plans & Pricing</li>
                <li>Personal AI Manager</li>
                <li>AI Business Writer</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>Blog</li>
                <li>Careers</li>
                <li>News</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>Documentation</li>
                <li>Pricing</li>
                <li>Press Conferences</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© 2024 Maxwell Inc.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-sm text-gray-600">Terms of Service</a>
                <a href="#" className="text-sm text-gray-600">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-600">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
