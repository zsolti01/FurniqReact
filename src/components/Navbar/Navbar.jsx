import './Navbar.css'
import logoNavbar from '../../assets/img/Logos/logo3_Navbar.png'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={logoNavbar} alt="Furniq Logo" className='logo'/>

        <div className='search-box'>
            <input type="text" placeholder='Search'/>
        </div>

        <ul>
            <li>Cart</li>
            <li>Profile</li>
        </ul>

    </div>
  )
}
