import {Bar} from "react-chartjs-2"

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

import Menu from "../components/menu"

const BarGraph = ({data}) => {

    return (
        <>
            <Menu />
            <Bar data={data} />
        </>
    ) 
}

export default BarGraph