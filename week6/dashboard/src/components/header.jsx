import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <nav className="Header" role="main">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/overview">Overview</Link></li>
                <li><Link to="/detail">Detail</Link></li>
            </ul>
        </nav>
        
    );
}

export default Header;