import './Navbar.css'
import logoNavbar from '../../assets/img/Logos/logo3_Navbar.png'
import searchIcon from '../../assets/img/Navbar/search.png'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={logoNavbar} alt="Furniq Logo" className='logo'/>

        <div className='search-box'>
          <img src={searchIcon} alt="Search icon" className='search-icon'/>
          <input type="text" placeholder='What are you looking for?'/>
        </div>

        <ul>
            <li>Cart</li>
            <li>Profile</li>
        </ul>

    </div>
  )
}
