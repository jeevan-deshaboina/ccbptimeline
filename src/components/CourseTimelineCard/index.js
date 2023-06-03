import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  const {courseTitle, description, duration, tagsList} = details

  return (
    <div className="course-container">
      <div className="heading-container">
        <h1 className="heading">{courseTitle}</h1>
        <div className="calendar-container">
          <AiFillClockCircle />
          <p className="time">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tag-list">
        {tagsList.map(tag => (
          <li className="list-items" key={tag.id}>
            <p className="tag-name">{tag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
