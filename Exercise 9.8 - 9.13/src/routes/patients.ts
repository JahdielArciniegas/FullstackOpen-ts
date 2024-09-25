import express from 'express';
import patientsService from '../services/patientsService';
import { getPatientsNonSsn } from '../types';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  const result : getPatientsNonSsn[] = patientsService.getPatientsNonSsn();
  return res.send(result);
});

export default patientsRouter;