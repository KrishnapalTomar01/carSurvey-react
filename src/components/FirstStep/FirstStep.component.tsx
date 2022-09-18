import { stepType, IUserResponse } from '../../Models/models';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const FirstStep = ({ pageNum, setPageNum, formData, setFormData }: stepType) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<IUserResponse>();

    const submitClickHandler = (data: IUserResponse) => {
        setFormData({...formData, 
            age: data.age, 
            gender: data.gender});
        if(data.age < 18) {
            navigate("/endsurvey");
            return;
        }
        setPageNum(pageNum + 1);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submitClickHandler)}>
                <div className="form-group">
                    <label>Age</label>
                    <input type="number" className="form-control"
                    {...register("age", { required: true, max: 100, min:1 })}
                    />
                </div>
                {errors.age && <p className='error'>Age must be between 1 to 100</p>}
                <div className="form-group mt-3">
                    <label>Gender</label>
                    <select className="form-control" {...register("gender", {
                       required: true
                    })}>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {errors.gender && <p className='error'>Select Gender</p>}
                <div>
                    <button className="btn btn-primary mt-3" type='submit'>Next</button>
                </div>
            </form>
        </div>
    )
}

export default FirstStep;