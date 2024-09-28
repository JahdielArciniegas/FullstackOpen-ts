import React, { useEffect, useState } from "react"
import { addDiaries, getDiaries } from './service/diaries'
import {  NonSensitiveDiaryEntry, Visibility, Weather } from "./types"
import './App.css'

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([])
  const [date, setDate] = useState<string>('')
  const [visibility, setVisibility] = useState<Visibility>()
  const [weather, setWeather] = useState<Weather>()
  const [comment, setComment] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    getDiaries().then(data => {
      setDiaries(data)
    })
  },[])

  const onCreate = (event : React.SyntheticEvent) => {
    event.preventDefault()
    const newDiaries = {
      date,visibility : visibility as Visibility ,weather : weather as Weather, comment
    }
    console.log(newDiaries.date)
    addDiaries(newDiaries).then(data => setDiaries(diaries.concat(data))
    ).catch((e : string) => {
      setMessage(e)
        setTimeout(() => {
        setMessage('')
      }, 5000)
    })
  }

  const handleVisibility = (value : unknown) => {
    setVisibility(value as Visibility)
  }

  const handleWeather = (value : unknown) => {
    setWeather(value as Weather)
  }

  return (
    <>
      <h2>Add new entry</h2>
      {message !== '' && <p className="err">{message}</p>}
      <form onSubmit={onCreate}>
        <div>
          <label htmlFor="date">date<input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)}/></label>
        </div>
        <div>
          <label htmlFor="visibility">visibility : great<input type="radio"  name="visibility" onChange={() => handleVisibility('great')}/>good<input type="radio"  name="visibility" onChange={() => handleVisibility('good')}/>ok<input type="radio"  name="visibility" onChange={() => handleVisibility('ok')}/>poor<input type="radio"  name="visibility" onChange={() => handleVisibility('poor')}/></label>
        </div>
        <div>
          <label htmlFor="weather">weather : sunny<input type="radio" name="weather" onChange={() => handleWeather('sunny')}/>rainy<input type="radio" name="weather" onChange={() => handleWeather('rainy')}/>cloudy<input type="radio" name="weather" onChange={() => handleWeather('cloudy')}/>stormy<input type="radio" name="weather" onChange={() => handleWeather('stormy')}/>windy<input type="radio" name="weather" onChange={() => handleWeather('windy')}/></label>
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
