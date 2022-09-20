import { IUserResponse } from "../../Models/models";
import './AverageCarsDisplay.styles.css';

type AverageCarsDisplayProps = {
    targetableUsers: IUserResponse[]
}

const AverageCarsDisplay = ({ targetableUsers }: AverageCarsDisplayProps) => {
    let carsCount = 0;
    targetableUsers.forEach((value) => {
        if (value.numberOfCars != null)
            carsCount += Number(value.numberOfCars);
    });
    let averageCars = 0;
    if (targetableUsers.length > 0)
        averageCars = carsCount / targetableUsers.length;
    let averageCarsText = Number(averageCars.toFixed(2));

    return (
        <div className="card me-5 card-style">
            <span> Average amount of cars in a family :</span>
            <h3>{averageCarsText}</h3>
        </div>
    );
}

export default AverageCarsDisplay;