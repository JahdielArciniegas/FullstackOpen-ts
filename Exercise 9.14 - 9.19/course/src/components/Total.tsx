interface TotalProps{
  total : number
}

const Total = (props : TotalProps) => {
  return (
    <p>Number of exercise {props.total}</p>
  )
}

export default Total
