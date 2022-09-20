import { IUserResponse } from "../../Models/models";
import { calculatePercentage } from "../../utils/common.utils";
import PieChart from "./PieChart.component";

const usersCareForEmissionLabels = ['Targetables that care about fuel emissions in %', "Targetables that don't care about fuel emissions in %"];

type PieChartUserEmissionProps = {
    targetableUsers: IUserResponse[]
}

const PieChartUserEmission = ({ targetableUsers }: PieChartUserEmissionProps) => {
    const numberOfTargetables = targetableUsers.length;
    const usersCountForEmission = targetableUsers.filter((value) => value.isWorriedForEmissions).length;
    const percentUserEmissions = calculatePercentage(usersCountForEmission, numberOfTargetables);
    const percentUserNonEmissions = calculatePercentage(numberOfTargetables - usersCountForEmission, numberOfTargetables);
    let percentDataEmissions = [
        percentUserEmissions,
        percentUserNonEmissions
    ];
    
    return <PieChart values={percentDataEmissions} labels={usersCareForEmissionLabels} title="Users worried about fuel emissions in percentage"></PieChart>;
}

export default PieChartUserEmission;