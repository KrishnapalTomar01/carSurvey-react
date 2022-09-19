import React, { createContext, useState } from 'react';
import { IUserResponse } from '../Models/models';

export const DefaultFormState : IUserResponse = {
    age: 0,
    gender: null,
    hasCarLicense: null,
    isFirstCar: null,
    driveTrainType: null,
    isWorriedForEmissions: null,
    numberOfCars: null,
    carTypes: []
}

export type surveyContextType = {
    formData: IUserResponse,
    setFormData: (userResponse: IUserResponse) => void,
    pageNum: number,
    setPageNum: (page: number) => void
}
interface Props {
    children: React.ReactNode;
}

export const SurveyContext = createContext<surveyContextType | null>(null);

export const SurveyDataProvider: React.FC<Props> = ({ children }) => {
  const [formData, setFormData] = useState(DefaultFormState);
  const [pageNum, setPageNum] = useState(0);
  const value = { formData, setFormData, pageNum, setPageNum };
  return (
    <SurveyContext.Provider value={value}>
      {children}
    </SurveyContext.Provider>
  );
};