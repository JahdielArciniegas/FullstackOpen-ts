const calculateBmi = (height : number, mass : number) : string => {
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
  }
}

console.log(calculateBmi(166, 74))