import "../globals.css"

const Layout = ({ children } : { children: React.ReactNode}) => (
  <div className="bg-cover bg-gradient-to-r from-black from-60% via-indigo-950 via-80% to-teal-950 h-screen">
    <header className='bg-gray-900 text-white py-4'>
      <nav className='container mx-auto'>
        <ul className='flex justify-between items-center'>
          <li>
            <a href='/' className='text-white hover:text-gray-400'>Home</a>
          </li>
          <li>
            <a href='about' className='text-white hover:text-gray-400'>About Me</a>
          </li>
          <li>
            <a href='experience' className='text-white hover:text-gray-400'>Experience</a>
          </li>
          <li>
            <a href='portfolio' className='text-white hover:text-gray-400'>Recent Projects</a>
          </li>
          <li>
            <a href='contact' className='text-white hover:text-gray-400'>Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>

    <main className='container mx-auto mt-8'>
      {children}
    </main>
    
    <footer className='text-center bg-gray-900 text-white fixed inset-x-0 bottom-0 p-4'>
      &copy; {new Date().getFullYear()} John Bissontz
    </footer>
  </div>
);

export default Layout;