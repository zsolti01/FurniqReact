import './Navbar.css'
import logoNavbar from '../../assets/img/Logos/logo3_brown_Navbar.png'
import searchIcon from '../../assets/img/Navbar/search.png'
import profileIcon from '../../assets/img/Navbar/user.png'
import cartIcon from '../../assets/img/Navbar/shopping-cart.png'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={logoNavbar} alt="Furniq" className='logo'/>

        <div className='search-box'>
          <img src={searchIcon} alt="Search" className='search-icon'/>
          <input type="text" placeholder='What are you looking for?'/>
        </div>

        <ul>
            <li>
              <img src={cartIcon} alt="Cart" className='nav-icon'/>
            </li>
            <li>
              <img src={profileIcon} alt="Profile" className='nav-icon'/>
            </li>
        </ul>

    </div>
  )
}
