import { stepType } from '../../Models/models';
import { useNavigate } from 'react-router-dom';

const FourthStep = ({ pageNum, setPageNum }: stepType) => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/endsurvey');
    }
    return (
        <div>
            <div>Fourth step</div>
            <div>
                <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default FourthStep;