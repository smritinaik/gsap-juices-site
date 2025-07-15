import {navLinks} from "../../constants/index.js"

const Navbar = () => {
  return (
    <nav>
        <div> 
            {/* working on navbar */}
            <a href='#home' className='flex items-center gap-2'>
              <p>velvel Pour</p>
            </a>

            <ul>
             {navLinks.map((link) => (
              <li>
                
              </li>
             ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar