import data from "../data/patients";
import {getPatientsNonSsn, Patients } from "../types";

const patients : Patients[] = data;
console.log(patients);

const getPatientsNonSsn = () : getPatientsNonSsn[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,name,
    dateOfBirth,
    gender,
    occupation
  }));
};

export default {getPatientsNonSsn};
