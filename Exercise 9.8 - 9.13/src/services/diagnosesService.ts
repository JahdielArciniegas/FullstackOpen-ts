import { Diagnoses } from "../types";
import data from '../data/diagnoses';

const diagonses : Diagnoses[] = data as Diagnoses[];

const getEntries = () : Diagnoses[] => {
  return diagonses;
};

export default { getEntries }; 