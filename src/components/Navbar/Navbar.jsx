import './Navbar.css'
import logo from '../../assets/img/Logos/logo3.png'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo'/>

        

        <ul>
            <li>Cart</li>
            <li>Profile</li>
        </ul>
        <div className='search-box'>
            <input type="text" placeholder='Search'/>
        </div>

    </div>
  )
}
