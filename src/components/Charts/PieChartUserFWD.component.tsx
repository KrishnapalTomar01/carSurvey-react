import { DriveTrain, IUserResponse } from "../../Models/models";
import { calculatePercentage } from "../../utils/common.utils";
import PieChart from "./PieChart.component";

const usersFWDLabels = ['Targetables that picked FWD or "I don\'t know" for drivetrain in %', 'Targetable that picked RWD for drivetrain in %'];

type PieChartUserFWDProps = {
    targetableUsers: IUserResponse[]
}

const PieChartUserFWD = ({ targetableUsers }: PieChartUserFWDProps) => {
    const numberOfTargetables = targetableUsers.length;
    const countFWD = targetableUsers.filter((value) => value.driveTrainType === DriveTrain.FWD || value.driveTrainType === DriveTrain.DontKnow).length;
    const percentUserFWD = calculatePercentage(countFWD, numberOfTargetables);
    const percentNonUserFWD = calculatePercentage(numberOfTargetables - countFWD, numberOfTargetables);
    let percentDataFWD: number[] = [
        percentUserFWD,
        percentNonUserFWD
    ];
    
    return <PieChart values={percentDataFWD} labels={usersFWDLabels} title="Percentage distribution of drive train type picked by targetable users"></PieChart>;
}

export default PieChartUserFWD;