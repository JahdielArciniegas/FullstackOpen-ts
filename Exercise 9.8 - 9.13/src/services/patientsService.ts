import patientsEntries from "../data/patients";
import {getPatientsNonSsn, newPatients, Patients } from "../types";
import { v1 as uuid } from 'uuid';

const patients : Patients[] = patientsEntries;

const getPatientsNonSsn = () : getPatientsNonSsn[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const getPatient = (id :string) : Patients=> {
  if(!patients.find(p => p.id === id)){
    throw new Error('Parrient not Found');
  }
  return patients.find(p => p.id === id) as Patients;
};

const addPatients = (entry : newPatients) : Patients => {
  const id : string = uuid();
  const newPatientsEntry = {
    id,
    ...entry
  };

  patients.push(newPatientsEntry);
  return newPatientsEntry;
};

export default {getPatientsNonSsn, addPatients, getPatient};
