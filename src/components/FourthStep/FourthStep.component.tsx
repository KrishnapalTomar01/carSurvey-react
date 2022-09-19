import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SurveyContext, surveyContextType } from '../../contexts/surveyForm.context';
import { UserRespondentType } from '../../Models/models';

const FourthStep = () => {
    const {pageNum, setPageNum, formData, setFormData} = useContext(SurveyContext) as surveyContextType;
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/endsurvey',{ state: { userType: UserRespondentType.Targetables } });
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