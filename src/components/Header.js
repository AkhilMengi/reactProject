
import { LOGO_URL } from "../utility/content";
import { Link } from "react-router-dom";
const Header = () => (
    <div className='header'>
        <div className='logo'>
            <img src={LOGO_URL} alt='Logo' />
        </div>
        <div className="nav">
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
               
            </ul>
        </div>
    </div>
);

export default Header;