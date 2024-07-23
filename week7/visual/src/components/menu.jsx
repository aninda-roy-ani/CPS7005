import {Link} from "react-router-dom"
import "../pages/common.css"

const Menu = () => {
    return (
        <nav role="navigation">
        <ul>
            <li>
                <Link to="/" className="btn-details">Home</Link><br/>
                <Link to={`/line`} className="btn-details">Line Plot</Link>
                <Link to={`/bar`} className="btn-details">Bar Graph</Link>
                <Link to={`/polar`} className="btn-details">Polar Chart</Link>
            </li>
        </ul>
        </nav>
    )
}

export default Menu