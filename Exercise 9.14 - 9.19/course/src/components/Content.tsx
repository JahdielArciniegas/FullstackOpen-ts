import { CoursePart } from "../App"
import Part from "./Part"


interface ContentProps {
  courses : CoursePart[]
}

const Content = (props : ContentProps) => {
  
  return (
    <div>
      {props.courses.map(a => <div key={a.name}><h3>{a.name} {a.exerciseCount}</h3> <Part part={a}/> </div>)}
    </div>
  )
}

export default Content
