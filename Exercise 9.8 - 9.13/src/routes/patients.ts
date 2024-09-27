import express from 'express';
import patientsService from '../services/patientsService';
import { getPatientsNonSsn, newPatients } from '../types';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  const result : getPatientsNonSsn[] = patientsService.getPatientsNonSsn();
  res.send(result);
});

patientsRouter.post('/', (req, res) => {
  const {name, dateOfBirth, ssn, gender, occupation} : newPatients = req.body as newPatients;
  const add = patientsService.addPatients({ name, dateOfBirth, ssn ,gender, occupation});
  res.json(add);
});

export default patientsRouter;