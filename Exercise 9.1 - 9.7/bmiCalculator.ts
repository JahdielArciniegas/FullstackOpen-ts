interface valueMassAndHeight {
  height : number;
  mass : number;
}

const parseArguments = (args:string[]): valueMassAndHeight =>{
  if (args.length < 4)throw new Error('Not enough arguments')
  if (args.length > 4)throw new Error('Too many arguments')
  if(!isNaN(Number(args[2]))&& !isNaN(Number(args[3]))) {
    return{
      height : Number(args[2]),
      mass : Number(args[3])
    }
  }else {
    throw new Error('Provided values were not numbres!');
  }
  
}

export const calculateBmi = (height : number, mass : number) : string => {
  const result = (mass/((height/100)^2))

  switch(true){
    case (result<16) :
      return "Underweight(Severe Thinness)"
    case (result<16.9) :
      return "Underweight(Moderate Thinness)"
    case (result<18.4) :
      return "Underweight(Mild Thinness)"
    case (result<24.9) :
      return "Normal(Healthy Weight)"
    case (result<29.9) :
      return "Overweight(Pre-obese)"
    case (result<34.9) :
      return "Obese (Class I)"
    case (result<39.9) :
      return "Obese (Class II)"
    case (result>=40):
      return "Obese (Class III)"
    default:
      return "Error"
  }
}

try {
  const {height, mass} = parseArguments(process.argv)
  console.log(calculateBmi(height,mass))
}catch(error : unknown ){
  if(error instanceof Error){
    console.log('Error Something bad happened')
  }
}