import data from "../data/patients";
import {getPatientsNonSsn, newPatients, Patients } from "../types";
import { v1 as uuid } from 'uuid';

const patients : Patients[] = data;

const getPatientsNonSsn = () : getPatientsNonSsn[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatients = (entry : newPatients) : Patients => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const id : string = uuid() as string;
  const newPatientsEntry = {
    id,
    ...entry
  };

  patients.push(newPatientsEntry);
  return newPatientsEntry;
};

export default {getPatientsNonSsn, addPatients};
