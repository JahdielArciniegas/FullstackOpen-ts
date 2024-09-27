import { useEffect, useState } from "react"
import diariesService from './service/diaries'
import { NewDiaryEntry, NonSensitiveDiaryEntry, Visibility, Weather } from "./types"

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([])
  const [date, setDate] = useState<string>('')
  const [visibility, setVisibility] = useState<Visibility>()
  const [weather, setWeather] = useState<Weather>()
  const [comment, setComment] = useState<string>('')

  useEffect(() => {
    diariesService.getDiaries().then(data => {
      setDiaries(data)
    })
  },[])

  const onCreate = (event : React.SyntheticEvent) => {
    event.preventDefault()
    const newDiaries : NewDiaryEntry = {
      date,visibility ,weather , comment
    }
    diariesService.addDiaries(newDiaries).then(data => {
      setDiaries(diaries.concat(data))
    })
  }

  return (
    <>
      <h2>Add new entry</h2>
      <form onSubmit={onCreate}>
        <div>
          <label htmlFor="date">date<input type="text" id="date" value={date} onChange={(e) => setDate(e.target.value)}/></label>
        </div>
        <div>
          <label htmlFor="visibility">visibility<input type="text" id="visibility" value={visibility} onChange={(e) => setVisibility(e.target.value)}/></label>
        </div>
        <div>
          <label htmlFor="weather">weather<input type="text" id="weather" value={weather} onChange={(e) => setWeather(e.target.value)}/></label>
        </div>
        <div>
          <label htmlFor="comment">comment<input type="text" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} /></label>
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Diary Entries</h2>
      {
        diaries.map(d => <div key={d.id}><h3 >{d.date}</h3> <div><p>visibility : {d.visibility}</p> <p>weather : {d.weather}</p></div></div>)
      }
    </>
  )
}

export default App
