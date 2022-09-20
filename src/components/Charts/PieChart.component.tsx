import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { borderColors, backgroundColors } from '../../utils/common.utils';

ChartJS.register(ArcElement, Tooltip, Legend);

type pieChartParamType = {
  values: number[],
  labels: string[],
  title: string
}

const PieChart = ({ values, labels, title }: pieChartParamType) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: false,
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
  };
  return <Pie className='me-5 card' options={options} height={500} width={500} data={data} />;
}

export default PieChart;