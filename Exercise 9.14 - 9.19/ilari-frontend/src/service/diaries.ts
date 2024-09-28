import axios from 'axios'
import { NewDiaryEntry, NonSensitiveDiaryEntry } from '../types'
const baseUrl = 'http://localhost:3000/api/diaries'

interface ValidationError {
  message : string;
  errors : Record<string, string[]>
}

export const getDiaries = () => {
  return axios.get<NonSensitiveDiaryEntry[]>(baseUrl).then(response => response.data)
}


export const addDiaries = (object: NewDiaryEntry) => {
  try {
    return axios.post<NonSensitiveDiaryEntry[]>(baseUrl, object).then(response => response.data)
  } catch (error) {
    if (axios.isAxiosError<ValidationError, Record<string,unknown>>(error) && error.response) {
      return error.response.data; 
    } else {
      console.error(error);
    }
  }
};
