import '../App.css';
import  { ReactComponent as Logo } from '../images/logo-white.svg'

function Navbar() {
  return (
    <nav>
      <div style={{width:"200px"}}><Logo/></div>
      <input type="checkbox" id="click"/>
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Signin</a></li>
        <li><a href="#">Book</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
