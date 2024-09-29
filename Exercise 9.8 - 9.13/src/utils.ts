import { newPatients, Gender, Entry } from "./types";

const isString = (text : unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date : string) : boolean => {
  return Boolean(Date.parse(date));
};

const parseName = (name : unknown) : string =>{
  if(!isString(name)){
    throw new Error('Incorrect or missing name');
  }

  return name;
};

const parseDate = (date : unknown): string => {
  if(!isString(date) || !isDate(date)){
    throw new Error('Incorrect or missing date:' + date);
  }
  return date;
};

const parseSsn = (ssn : unknown) : string => {
  if(!isString(ssn)){
    throw new Error('Incorrect or missing ssn');
  }
  return ssn;
};

const isGender = (gender : string): gender is Gender => {
  return Object.values(Gender).map(g => g.toString()).includes(gender);
};

const parseGender = (gender : unknown) : Gender=> {
  if(!isString(gender) || !isGender(gender)){
    throw new Error('Incorrect Gender' + gender);
  }
  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if(!isString(occupation)){
    throw new Error('Incorrect Occupation'+ occupation);
  }
  return occupation;
};

const isArray = (entries : unknown) : entries is Entry[] => {
  return entries instanceof Array;
};

const parseEntries = (entries : unknown) : Entry[] => {
  if(!isArray(entries)){
    throw new Error('Incorrect Entries'+ entries);
  }
  return entries;
};

const toNewPatientsEntry = (object : unknown) : newPatients =>{
  if(!object || typeof object !== 'object'){
    throw new Error('Incorrect or missing data');
  }
  
  if('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object && 'entries' in object){
    const newEntry : newPatients = {
      name : parseName(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
      gender : parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
      entries : parseEntries(object.entries)
    };

    return newEntry;
  }
  throw new Error('Incorrect data: a field missing');
};

export default toNewPatientsEntry;