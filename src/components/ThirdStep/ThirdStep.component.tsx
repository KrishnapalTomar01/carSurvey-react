import { IUserResponse, UserRespondentType, USER_RESPONSES } from '../../Models/models';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import BooleanInput from '../BooleanInput/BooleanInput.component';
import { useContext } from 'react';
import { SurveyContext, surveyContextType } from '../../contexts/surveyForm.context';
import { setItemInLocalStorageArray } from '../../utils/localstorage.utils';

const ThirdStep = () => {
    const {pageNum, setPageNum, formData, setFormData} = useContext(SurveyContext) as surveyContextType;
    
    const navigate = useNavigate();
    const { handleSubmit, control,formState: { errors } } = useForm<IUserResponse>();

    const submitClickHandler = (data: IUserResponse) => {
        const updatedFormData = {
            ...formData,
            isFirstCar : data.isFirstCar
        };
        setFormData(updatedFormData);
        if(data.isFirstCar === true) {
            setItemInLocalStorageArray<IUserResponse>(USER_RESPONSES, updatedFormData);
            navigate("/endsurvey",{ state: { userType: UserRespondentType.FirstTimers } });
            return;
        }
        setPageNum(pageNum + 1);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submitClickHandler)}>
                <div className="form-group">
                    <label>Is this your first car?</label>
                    <div>
                    <BooleanInput control={control} name={"isFirstCar"} trueText="Yes" falseText="No" />
                    {errors.isFirstCar && <div className='error'>Select value</div>}
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary mt-3" type='submit'>Next</button>
                </div>
            </form>
        </div>
    )
}

export default ThirdStep;