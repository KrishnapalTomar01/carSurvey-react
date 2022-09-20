import { getLocalStorageValue } from '../../utils/localstorage.utils';
import { DriveTrain, IUserResponse, USER_RESPONSES } from '../../Models/models';
import BarChartRespondents from '../../components/Charts/BarChartRespondents.component';
import PieChart from '../../components/Charts/PieChart.component';
import { calculatePercentage } from '../../utils/common.utils';
import './Statististics.styles.css';
import AverageCarsDisplay from '../../components/Charts/AverageCarsDisplay.component';
import StackChartCar from '../../components/Charts/StackChartCar.component';

const StatisticsPage = () => {
    const userResponses = getLocalStorageValue<IUserResponse[]>(USER_RESPONSES);
    let numberOfAdolescents = 0;
    let numberOfUnlicensed = 0;
    let numberOfFirstTimers = 0;

    let targetableUsers: IUserResponse[] = [];
    userResponses.forEach((value) => {
        if (value.age < 18) numberOfAdolescents++;
        else if (value.hasCarLicense === false) numberOfUnlicensed++;
        else if (value.isFirstCar === true) numberOfFirstTimers++;
        else targetableUsers.push(value);
    });
    const numberOfTargetables = targetableUsers.length;
    const totalCount = userResponses.length;
    const numberOfRespondents = [numberOfAdolescents, numberOfUnlicensed, numberOfFirstTimers, numberOfTargetables];

    let percentDataRespGroups: number[] = [
        calculatePercentage(numberOfAdolescents, totalCount),
        calculatePercentage(numberOfUnlicensed, totalCount),
        calculatePercentage(numberOfFirstTimers, totalCount),
        calculatePercentage(numberOfTargetables, totalCount)
    ];
    const respondentLabelsPie = ['Adolescents in %', 'Unlicensed in %', 'First-timers in %', 'Targetables in %'];

    const usersCountForEmission = targetableUsers.filter((value) => value.isWorriedForEmissions).length;
    const percentUserEmissions = calculatePercentage(usersCountForEmission, numberOfTargetables);
    const percentUserNonEmissions = calculatePercentage(numberOfTargetables - usersCountForEmission, numberOfTargetables);
    let percentDataEmissions: number[] = [
        percentUserEmissions,
        percentUserNonEmissions
    ];
    const usersCareForEmissionLabels = ['Targetables that care about fuel emissions in %', "Targetables that don't care about fuel emissions in %"];

    const countFWD = targetableUsers.filter((value) => value.driveTrainType === DriveTrain.FWD || value.driveTrainType === DriveTrain.DontKnow).length;
    const percentUserFWD = calculatePercentage(countFWD, numberOfTargetables);
    const percentNonUserFWD = calculatePercentage(numberOfTargetables - countFWD, numberOfTargetables);
    let percentDataFWD: number[] = [
        percentUserFWD,
        percentNonUserFWD
    ];
    const usersFWDLabels = ['Targetables that picked FWD or "I don\'t know" for drivetrain in %', 'Targetable that picked RWD for drivetrain in %'];

    return (
        <>
            {
                userResponses?.length > 0 &&
                <div className='container'>
                    <h2 className='page-heading'>Survey Statistics</h2>
                    <div className='row mt-5 charts-row'>
                        <BarChartRespondents respondentsCount={numberOfRespondents}></BarChartRespondents>
                        <PieChart values={percentDataRespGroups} labels={respondentLabelsPie} title="Respondent groups in percentage"></PieChart>
                    </div>
                    <div className='row mt-5 charts-row'>
                        <PieChart values={percentDataEmissions} labels={usersCareForEmissionLabels} title="Users worried about fuel emissions in percentage"></PieChart>
                        <PieChart values={percentDataFWD} labels={usersFWDLabels} title="Percentage distribution of drive train type picked by targetable users"></PieChart>
                    </div>
                    <div className='row my-5 charts-row'>
                        <AverageCarsDisplay targetableUsers={targetableUsers}></AverageCarsDisplay>
                        <StackChartCar targetableUsers={targetableUsers}></StackChartCar>
                    </div>
                </div>
            }
        </>
    );
}

export default StatisticsPage;