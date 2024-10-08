export interface Diagnoses {
  code : string,
  name : string,
  latin? : string
}

interface SickLeave {
  startDate : string,
  endDate : string
}

interface Discharge {
  date : string,
  criteria: string
}

interface BaseEntry {
  id:string,
  description: string,
  date: string,
  specialist : string,
  diagnosisCodes: Array<Diagnoses['code']>
}

interface OccupationalHealthCare extends BaseEntry {
  type : 'occupationalHealthCare',
  sickLeave : SickLeave
}

interface Hospital extends BaseEntry{
  type : 'Hospital',
  discharge : Discharge
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry {
  type : "HealhCheck",
  healthCheckRating : HealthCheckEntry
}

export type Entry = 
| Hospital
| OccupationalHealthCare
| HealthCheckEntry;

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

type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T,K> : never;
export type EntryWithoutId = UnionOmit<Entry, 'id'>;
export type getPatientsNonSsn = Omit<Patients, 'ssn' | 'entries'>;
export type newPatients = Omit<Patients, 'id' >;
