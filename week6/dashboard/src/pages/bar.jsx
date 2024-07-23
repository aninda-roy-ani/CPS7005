import Menu from "../components/chartMenu"
import Footer from "../components/footer"
import Header from "../components/header"

import { Bar } from "react-chartjs-2"

import {
    Chart as ChartJS,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Legend,
    Tooltip
} from "chart.js"

ChartJS.register(
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Legend,
    Tooltip
)


const BarChart = ({data}) => {
    return (
        <>
            <Header />
            <Menu />
            <Bar data={data} />
            <Footer />
        </>
    )
}

export default BarChart