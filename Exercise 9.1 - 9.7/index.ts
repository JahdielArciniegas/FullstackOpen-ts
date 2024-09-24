import express from 'express'
import { calculateBmi } from './bmiCalculator'
import { calculateExercises } from './exerciseCalculator'

const app = express()

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack')
})

app.get('/bmi', (req, res) => {
  if(!req.query.height || !req.query.weight){
    return res.json({
      error : 'malformatted parameters'
    })
  }
  if(isNaN(Number(req.query.height)) || isNaN(Number(req.query.weight))){
    return res.json({
      error : 'malformatted parameters'
    })
  }

  const result = calculateBmi(Number(req.query.height),Number(req.query.weight))
  return res.json({
    weight : Number(req.query.weight),
    height : Number(req.query.height),
    bmi : result
  })
})

app.get('/exercises', (req, res) => {
  if(!req.query.daytrained || !req.query.target) res.json({error : 'Parameters Missing'})
  if(isNaN(Number(req.query.target))) res.json({error : 'malformatted parameters' })
  const daytrained = String(req.query.daytrained).split(',')
  const arrayTrained = daytrained.map(a => Number(a))
  if(!daytrained.every(a => !isNaN(Number(a)))){
    return res.json({error : 'malformatted parameters'})
  } 

  const result = calculateExercises(arrayTrained, Number(req.query.target))
  return res.json(result)
})

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})