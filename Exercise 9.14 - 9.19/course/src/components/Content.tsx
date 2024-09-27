interface Course{
  name : string,
  exerciseCount: number
}

interface ContentProps {
  courses : Course[]
}

const Content = (props : ContentProps) => {
  return (
    <div>
      {props.courses.map(a => <p>{a.name} {a.exerciseCount}</p>)}
    </div>
  )
}

export default Content
