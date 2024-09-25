import express from 'express';
import { Diagnoses } from '../types';
import diagnosesService from '../services/diagnosesService';

const diagnosesRouter = express.Router();

diagnosesRouter.get('/', (_req, res) => {
  const result:Diagnoses[] = diagnosesService.getEntries();
  res.json(result);
});
export default diagnosesRouter;