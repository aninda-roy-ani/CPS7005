import Menu from "../components/chartMenu"
import Footer from "../components/footer"
import Header from "../components/header"

import { Line } from "react-chartjs-2"

import {
    Chart as ChartJS,
    LineController,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Legend,
    Tooltip
}
from "chart.js"

ChartJS.register(
    LineController,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Legend,
    Tooltip
)


const LineChart = ({data}) => {
    return (
        <>
            <Header />
            <Menu />
            <Line data={data} />
            <Footer />
        </>
    )
}

export default LineChart