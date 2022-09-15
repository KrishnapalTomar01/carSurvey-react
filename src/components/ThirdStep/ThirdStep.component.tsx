import { stepType } from '../../Models/models';

const ThirdStep = ({ pageNum, setPageNum }: stepType) => {

    const handleSubmit = () => {
        setPageNum(pageNum + 1);
    }
    return (
        <div>
            <div>Third step</div>
            <div>
                <button className="btn btn-primary" onClick={handleSubmit}>Next</button>
            </div>
        </div>
    )
}

export default ThirdStep;