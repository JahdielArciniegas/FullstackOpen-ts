import axios from 'axios'
import { NewDiaryEntry, NonSensitiveDiaryEntry } from '../types'
const baseUrl = 'http://localhost:3000/api/diaries'

const getDiaries = () => {
  return axios.get<NonSensitiveDiaryEntry[]>(baseUrl).then(response => response.data)
}


const addDiaries = (object : NewDiaryEntry) => {
  return axios.post<NonSensitiveDiaryEntry[]>(baseUrl, object).then(response => response.data)
}

export default {getDiaries, addDiaries}