import { ICarType, IUserResponse } from "../../Models/models";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataset
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { backgroundColorsStack } from '../../utils/common.utils';

const colorsCount = backgroundColorsStack.length;
type StackChartCarProps = {
    targetableUsers: IUserResponse[]
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Car Make - Model distribution',
        },
    },
    responsive: false,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const StackChartCar = ({ targetableUsers }: StackChartCarProps) => {
    let carMakeModelList: ICarType[] = [];
    // combining make models list of all targetable users
    targetableUsers.forEach((value) => {
        if (value.carTypes.length > 0) {
            carMakeModelList = carMakeModelList.concat(value.carTypes);
        }
    });

    // unique car make values
    const carMakeList = [...new Set(carMakeModelList.map(item => item.carMake))];
    const carModelMap = new Map<string, ChartDataset<"bar">>();
    let backgroundColorIndex: number = 0;
    // prepare stack chart dataSet for each car model name
    carMakeModelList.forEach((value) => {
        let modelName = value.modelName.trim().toUpperCase();
        if (carModelMap.has(modelName)) {
            let chartSet = carModelMap.get(modelName);
            let carMakeIndex = carMakeList.indexOf(value.carMake);
            if (carMakeIndex !== -1 && chartSet) {
                let dataVal = Number(chartSet.data[carMakeIndex]);
                chartSet.data[carMakeIndex] = dataVal + 1;
            }
        }
        else {
            let colorIndex = backgroundColorIndex % colorsCount;
            backgroundColorIndex++;
            let dataArray: number[] = new Array(carMakeList.length).fill(0);
            let carMakeIndex = carMakeList.indexOf(value.carMake);
            if (carMakeIndex !== -1)
                dataArray[carMakeIndex] = 1;
            carModelMap.set(modelName,
                {
                    label: modelName,
                    data: dataArray,
                    backgroundColor: backgroundColorsStack[colorIndex]
                });
        }
    });
    const carMakeDataSet = Array.from(carModelMap.values());
    const data = {
        labels: carMakeList,
        datasets: carMakeDataSet,
    };
    return (
        <Bar className='me-5 card' height={500} width={500} options={options} data={data} />
    );
}

export default StackChartCar;