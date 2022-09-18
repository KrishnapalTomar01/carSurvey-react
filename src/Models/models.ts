export type stepType = {
    pageNum : number,
    setPageNum: React.Dispatch<React.SetStateAction<number>>,
    formData: IUserResponse,
    setFormData: React.Dispatch<React.SetStateAction<IUserResponse>>
}

export enum GenderOptions {
    M = "M",
    F = "F",
    Other = "Other"
}

export enum DriveTrain {
    FWD = "FWD",
    RWD = "RWD",
    DontKnow = "I Don't know"
}

export enum UserRespondentType {
    Adolescents,
    Unlicensed,
    FirstTimers,
    Targetables
}

export interface IUserResponse {
    age: number,
    gender: GenderOptions | null,
    hasCarLicense: boolean | null,
    isFirstCar: boolean | null,
    driveTrainType: DriveTrain | null,
    isWorriedForEmissions: boolean | null,
    numberOfCars: number | null,
    carTypes: ICarType[]
}

export interface ICarType {
    carMake: string,
    modelName: string
}