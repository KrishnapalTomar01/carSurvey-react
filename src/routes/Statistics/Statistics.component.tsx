import { getLocalStorageValue } from '../../utils/localstorage.utils';
import { IUserResponse, USER_RESPONSES } from '../../Models/models';
import BarChartRespondents from '../../components/Charts/BarChartRespondents.component';

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
    return (
        <>
            {
                userResponses?.length > 0 &&
                <div className='container'>
                    <div className='row mt-5'>
                        <BarChartRespondents respondentsCount={numberOfRespondents}></BarChartRespondents>
                    </div>
                </div>
            }
        </>
    );
}

export default StatisticsPage;