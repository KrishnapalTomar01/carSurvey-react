import { stepType, IUserResponse } from '../../Models/models';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import BooleanInput from '../BooleanInput/BooleanInput.component';

const ThirdStep = ({ pageNum, setPageNum, formData, setFormData }: stepType) => {
    const navigate = useNavigate();
    const { handleSubmit, control,formState: { errors } } = useForm<IUserResponse>();

    const submitClickHandler = (data: IUserResponse) => {
        setFormData({
            ...formData,
            isFirstCar : data.isFirstCar
        });
        if(data.isFirstCar === true) {
            navigate("/endsurvey");
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