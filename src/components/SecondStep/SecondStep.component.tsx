import { stepType, IUserResponse } from '../../Models/models';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import BooleanInput from '../BooleanInput/BooleanInput.component';

const SecondStep = ({ pageNum, setPageNum, formData, setFormData }: stepType) => {
    const navigate = useNavigate();
    const { handleSubmit, control,formState: { errors } } = useForm<IUserResponse>();

    const submitClickHandler = (data: IUserResponse) => {
        setFormData({
            ...formData,
            hasCarLicense : data.hasCarLicense
        });
        if(data.hasCarLicense === false) {
            console.log(formData);
            navigate("/endsurvey");
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