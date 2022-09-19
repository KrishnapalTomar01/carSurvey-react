import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useForm, useFieldArray, ValidateResult } from 'react-hook-form';
import { SurveyContext, surveyContextType } from '../../contexts/surveyForm.context';
import { IUserResponse, UserRespondentType } from '../../Models/models';
import BooleanInput from '../BooleanInput/BooleanInput.component';

const FourthStep = () => {
    const { formData, setFormData } = useContext(SurveyContext) as surveyContextType;
    const { register, handleSubmit, control, formState: { errors }, watch, getValues } = useForm<IUserResponse>();
    const navigate = useNavigate();
    const numberOfCars = watch('numberOfCars');
    const { fields, append, remove } = useFieldArray({ name: 'carTypes', control });
    
    const validateCarModel = (value: string, index: number) : ValidateResult => {
        if(getValues()['carTypes'].at(index)?.carMake === 'BMW') {
            const patternOne = /^M?\d{3}(d|i)?$/i;
            const patternTwo = /^(X|Z)\d{1}$/i;
            return patternOne.test(value) || patternTwo.test(value);
        }
        return true;
    }

    useEffect(() => {
        // update field array when car count changed
        const newVal = numberOfCars || 0;
        const oldVal = fields.length;
        if (newVal > oldVal) {
            // append car type to field array
            for (let i = oldVal; i < newVal; i++) {
                append({ carMake: '', modelName: '' });
            }
        } else {
            // remove car type from field array
            for (let i = oldVal; i > newVal; i--) {
                remove(i - 1);
            }
        }
    }, [numberOfCars, append, remove, fields.length]);

    const submitClickHandler = (data: IUserResponse) => {
        setFormData({...formData, 
            driveTrainType: data.driveTrainType,
            isWorriedForEmissions: data.isWorriedForEmissions,
            numberOfCars: data.numberOfCars,
            carTypes: data.carTypes
        });
        navigate('/endsurvey', { state: { userType: UserRespondentType.Targetables } });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submitClickHandler)}>

                <div className="form-group col-6">
                    <label>Which drivetrain do you prefer?</label>
                    <select className="form-control" {...register("driveTrainType", {
                        required: true
                    })}>
                        <option value="FWD">FWD</option>
                        <option value="RWD">RWD</option>
                        <option value="DontKnow">I Don't Know</option>
                    </select>
                </div>
                {errors.driveTrainType && <p className='error'>Select Drive train</p>}

                <div className="form-group mt-3">
                    <label>Are you worried about fuel emissions?</label>
                    <div>
                        <BooleanInput control={control} name={"isWorriedForEmissions"} trueText="Yes" falseText="No" />
                        {errors.isWorriedForEmissions && <div className='error'>Select value</div>}
                    </div>
                </div>

                <div className="form-group mt-3 col-6">
                    <label>How many cars do you have in your family?</label>
                    <select className='form-control' {...register('numberOfCars')}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i =>
                            <option key={i} value={i}>{i}</option>
                        )}
                    </select>
                    {errors.numberOfCars && <div className="error">Select Number of Cars</div>}
                </div>

                {fields.map((item, i) => (
                    <div key={i} className="list-group list-group-flush">
                        <div className="list-group-item px-0 py-3">
                            <h5 className="card-title">Car {i + 1}</h5>
                            <div className="row">

                                <div className="form-group col-6">
                                    <label className='me-2'>Car Make</label>
                                    <select className='form-control' {...register(`carTypes.${i}.carMake`, {required : true})}>
                                        {['Volkswagen','BMW','Mercedes','Hyundai'].map(i =>
                                                <option key={i} value={i}>{i}</option>
                                        )}
                                    </select>
                                    {errors.carTypes?.[i]?.carMake && <div className="error">Car make is required</div>}
                                </div>

                                <div className="form-group col-6">
                                    <label className='me-2'>Model name</label>
                                    <input className='form-control' {...register(`carTypes.${i}.modelName`, {required: true, 
                                        validate: (value) => validateCarModel(value, i) })} type="text"/>
                                    {errors.carTypes?.[i]?.modelName && <div className="error">Enter valid model name</div>}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}

                <div>
                    <button className="btn btn-primary mt-3" type='submit'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default FourthStep;