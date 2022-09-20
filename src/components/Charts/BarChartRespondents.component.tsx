import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { borderColors, backgroundColors } from '../../utils/common.utils';

const labels = ['Adolescents', 'Unlicensed', 'First-Timers', 'Targetables'];

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: false,
    plugins: {
        title: {
            display: true,
            text: 'Respondent Group count',
        },
    },
};

type paramType = {
    respondentsCount: number[]
}

const BarChartRespondents = ({ respondentsCount }: paramType) => {
    const data = {
        labels,
        datasets: [
            {
                label: 'No. of each respondent group',
                data: respondentsCount,
                backgroundColor: backgroundColors,
                borderColors: borderColors,
                borderWidth: 1
            }
        ],
    };
    return (
        <>
            <Bar className='me-5 card' height={500} width={500} options={options} data={data} />
        </>
    )
}

export default BarChartRespondents;