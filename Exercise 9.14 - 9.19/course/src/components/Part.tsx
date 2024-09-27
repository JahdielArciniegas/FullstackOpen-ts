import { CoursePart } from "../App"

const Part = ({part} : {part : CoursePart}) => {

  const assertNever = (value : never) : never => {
    throw new Error(`Unhamdled discriminated union member: ${JSON.stringify(value)}`)
  }

  let showPart

  switch(part.kind){
    case "basic" :
      console.log(part.name, part.description, part.exerciseCount)
      showPart = <p>{part.description}</p>
      break
    case "group":
      console.log(part.name, part.exerciseCount, part.groupProjectCount)
      showPart = <p>project exercise{part.groupProjectCount}</p>
      break
    case "background" :
      console.log(part.name, part.description, part.exerciseCount, part.backgroundMaterial)
      showPart = <div><p>{part.description}</p><p>submit to {part.backgroundMaterial}</p></div>
      break
    case "special" :
      showPart = <div><p>{part.description}</p><p>requered skills: {part.requirements.join(', ')}</p></div>
      break
    default:
      return assertNever(part)
  } 
  return (
    <div>
      {showPart}
    </div>
  )
}

export default Part
