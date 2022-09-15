import { stepType } from '../../Models/models';

const FirstStep = ({ pageNum, setPageNum }: stepType) => {

    const handleSubmit = () => {
        setPageNum(pageNum + 1);
    }
    return (
        <div>
            <div>First step</div>
            <div>
                <button className="btn btn-primary" onClick={handleSubmit}>Next</button>
            </div>
        </div>
    )
}

export default FirstStep;