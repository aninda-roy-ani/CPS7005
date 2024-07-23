
import {Line} from "react-chartjs-2"

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

import Menu from "../components/menu"

const LinePlot = ({data}) => {
    return (
        <>
            <Menu />
            <Line data={data} />
        </>
    )
}

export default LinePlot