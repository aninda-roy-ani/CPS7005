import { Link } from "react-router-dom"
import React from "react"
import './common.css'

const Menu = () => {
    return (
        <>
         <ul>
            <Link to={`/charts/bar`} className="btn-details">Bar Chart</Link>
            <Link to={`/charts/line`} className="btn-details">Line Chart</Link>
            <Link to={`/charts/polar`} className="btn-details">Polar Chart</Link>
         </ul>
        </>
    )
}

export default Menu