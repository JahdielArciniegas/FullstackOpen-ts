import { useEffect, useState } from "react"
import diariesService from './service/diaries'
import { NonSensitiveDiaryEntry } from "./types"

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([])
  useEffect(() => {
    diariesService.getDiaries().then(data => {
      setDiaries(data)
    })
  },[])

  return (
    <>
      <h2>Diary Entries</h2>
      {
        diaries.map(d => <div key={d.id}><h3 >{d.date}</h3> <div><p>visibility : {d.visibility}</p> <p>weather : {d.weather}</p></div></div>)
      }
    </>
  )
}

export default App
