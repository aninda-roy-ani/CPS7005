import Menu from "../components/chartMenu"
import Footer from "../components/footer"
import Header from "../components/header"

import { PolarArea } from "react-chartjs-2"

import { 
    Chart as ChartJS, 
    ArcElement, 
    RadialLinearScale, 
    Tooltip, 
    Legend 
} from 'chart.js';

ChartJS.register(
    ArcElement, 
    RadialLinearScale, 
    Tooltip, 
    Legend
);

const PolarChart = ({data}) => {
    return (
        <>
            <Header />
            <Menu />
            <PolarArea data={data} />
            <Footer />
        </>
    )
}

export default PolarChart