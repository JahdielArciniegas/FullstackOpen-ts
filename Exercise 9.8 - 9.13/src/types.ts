export interface Diagnoses {
  code : string,
  name : string,
  latin? : string
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Entry{
}

export enum Gender{
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Patients {
  id : string,
  name:  string,
  dateOfBirth : string,
  ssn : string,
  gender : Gender,
  occupation : string,
  entries: Entry[]
}

export type getPatientsNonSsn = Omit<Patients, 'ssn' | 'entries'>;
export type newPatients = Omit<Patients, 'id' >;