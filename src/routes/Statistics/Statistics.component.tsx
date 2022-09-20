import { getLocalStorageValue } from '../../utils/localstorage.utils';
import { IUserResponse, USER_RESPONSES } from '../../Models/models';
import BarChartRespondents from '../../components/Charts/BarChartRespondents.component';
import AverageCarsDisplay from '../../components/Charts/AverageCarsDisplay.component';
import StackChartCar from '../../components/Charts/StackChartCar.component';
import PieChartRespondents from '../../components/Charts/PieChartRespondents.component';
import PieChartUserEmission from '../../components/Charts/PieChartUserEmission.component';
import PieChartUserFWD from '../../components/Charts/PieChartUserFWD.component';
import './Statististics.styles.css';

const StatisticsPage = () => {
    const userResponses = getLocalStorageValue<IUserResponse[]>(USER_RESPONSES);
    let numberOfAdolescents = 0;
    let numberOfUnlicensed = 0;
    let numberOfFirstTimers = 0;
    let targetableUsers: IUserResponse[] = [];
    let totalCount = 0;
    let numberOfRespondents: number[] = [];
    if (userResponses != null) {
        userResponses.forEach((value) => {
            if (value.age < 18) numberOfAdolescents++;
            else if (value.hasCarLicense === false) numberOfUnlicensed++;
            else if (value.isFirstCar === true) numberOfFirstTimers++;
            else targetableUsers.push(value);
        });
        const numberOfTargetables = targetableUsers.length;
        totalCount = userResponses.length;
        numberOfRespondents = [numberOfAdolescents, numberOfUnlicensed, numberOfFirstTimers, numberOfTargetables];
    }

    return (
        <>
            {
                userResponses?.length > 0 &&
                <div className='container'>
                    <h2 className='page-heading'>Survey Statistics</h2>
                    <div className='row mt-5 charts-row'>
                        <BarChartRespondents respondentsCount={numberOfRespondents}></BarChartRespondents>
                        <PieChartRespondents numberOfRespondents={numberOfRespondents} totalCount={totalCount}></PieChartRespondents>
                    </div>
                    <div className='row mt-5 charts-row'>
                        <PieChartUserEmission targetableUsers={targetableUsers}></PieChartUserEmission>
                        <PieChartUserFWD targetableUsers={targetableUsers}></PieChartUserFWD>
                    </div>
                    <div className='row my-5 charts-row'>
                        <AverageCarsDisplay targetableUsers={targetableUsers}></AverageCarsDisplay>
                        <StackChartCar targetableUsers={targetableUsers}></StackChartCar>
                    </div>
                </div>
            }
            {(!userResponses || userResponses.length === 0) && <div className='container mt-5'>No survey data available</div> }
        </>
    );
}

export default StatisticsPage;