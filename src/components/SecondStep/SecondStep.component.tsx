import { IUserResponse, UserRespondentType, USER_RESPONSES } from '../../Models/models';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import BooleanInput from '../BooleanInput/BooleanInput.component';
import { useContext } from 'react';
import { SurveyContext, surveyContextType } from '../../contexts/surveyForm.context';
import { setItemInLocalStorageArray } from '../../utils/localstorage.utils';

const SecondStep = () => {
    const {pageNum, setPageNum, formData, setFormData} = useContext(SurveyContext) as surveyContextType;
    const navigate = useNavigate();
    const { handleSubmit, control,formState: { errors } } = useForm<IUserResponse>();

    const submitClickHandler = (data: IUserResponse) => {
        const updatedFormData = {
            ...formData,
            hasCarLicense : data.hasCarLicense
        };
        setFormData(updatedFormData);
        if(data.hasCarLicense === false) {
            setItemInLocalStorageArray<IUserResponse>(USER_RESPONSES, updatedFormData);
            navigate("/endsurvey",{ state: { userType: UserRespondentType.Unlicensed } });
            return;
        }
        // Show bonus question page for age group 18-25 only
        if(formData.age > 25 ) {
            setPageNum(pageNum + 2);
        }
        else {
            setPageNum(pageNum + 1);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submitClickHandler)}>
                <div className="form-group">
                    <label>Do you own a driving license?</label>
                    <div>
                    <BooleanInput control={control} name={"hasCarLicense"} trueText="Yes" falseText="No, I prefer using other transport" />
                    {errors.hasCarLicense && <div className='error'>Select value</div>}
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary mt-3" type='submit'>Next</button>
                </div>
            </form>
        </div>
    )
}

export default SecondStep;