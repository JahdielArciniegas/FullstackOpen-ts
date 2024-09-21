interface resultValue {
  periodLength : number;
  trainingDays : number;
  success : boolean;
  rating : number;
  ratingDescription : string;
  target : number;
  average : number
}


const calculateExercises = (trainerPerDay : number[]) :resultValue => {
  const periodLength:number = trainerPerDay.length
  const training = trainerPerDay.filter((t : number) => t !== 0)
  const trainingDays : number = training.length
  let totalH:number=0
  trainerPerDay.forEach((a) => totalH+=a)
  let rating : number
  let ratingDescription : string
  if(totalH<10){
    rating = 1
    ratingDescription = 'bad'
  }else if(totalH<15){
    rating = 2
    ratingDescription = 'not too bad but could be better'
  }else{
    rating = 3
    ratingDescription = 'good'
  }
  const average : number = totalH/periodLength
  const target : number = 2
  const success : boolean = target<average

  const result = {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  }

  return result
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]))