import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {imageUrl, projectTitle, description, projectUrl, duration} = details

  return (
    <div className="project-container">
      <img src={imageUrl} className="imageUrl" alt="project" />
      <div className="heading-container">
        <h1 className="heading">{projectTitle}</h1>
        <div className="calendar-container">
          <AiFillCalendar />
          <p className="time">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl}>visit</a>
    </div>
  )
}

export default ProjectTimelineCard
