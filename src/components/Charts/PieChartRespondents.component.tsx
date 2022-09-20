import { calculatePercentage } from "../../utils/common.utils";
import PieChart from "./PieChart.component";

const respondentLabels = ['Adolescents in %', 'Unlicensed in %', 'First-timers in %', 'Targetables in %'];

type PieChartRespondentsProps = {
    totalCount: number,
    numberOfRespondents: number[]
}

const PieChartRespondents = ({ totalCount, numberOfRespondents }: PieChartRespondentsProps) => {
    let percentDataRespGroups: number[] = [];
    numberOfRespondents.forEach((value) => 
        percentDataRespGroups.push(calculatePercentage(value,totalCount)));
    
    return <PieChart values={percentDataRespGroups} labels={respondentLabels} title="Respondent groups in percentage"></PieChart>;
}

export default PieChartRespondents;