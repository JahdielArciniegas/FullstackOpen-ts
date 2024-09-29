/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import patientsService from '../services/patientsService';
import { getPatientsNonSsn, newPatients, Patients } from '../types';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  const result : getPatientsNonSsn[] = patientsService.getPatientsNonSsn();
  res.send(result);
});

patientsRouter.post('/', (req, res) => {
  const {name, dateOfBirth, ssn, gender, occupation, entries} : newPatients = req.body;
  const add = patientsService.addPatients({ name, dateOfBirth, ssn ,gender, occupation, entries});
  res.json(add);
});

patientsRouter.get('/:id', (req, res) => {
  if(!req.params.id){
    throw new Error('Patients not found');
  }
  const person : Patients = patientsService.getPatient(req.params.id);
  res.send(person);  
});

export default patientsRouter;