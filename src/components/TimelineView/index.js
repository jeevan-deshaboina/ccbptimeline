import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLine = items => {
    if (items.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={items.id} details={items} />
    }
    return <CourseTimelineCard key={items.is} details={items} />
  }

  return (
    <div className="app-container">
      <div className="app-card-container">
        <h1 className="main-heading">
          MY JOURNEY OF
          <br />
          <span>CCBP 4.0</span>
        </h1>
      </div>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        theme={{
          secondary: 'white',
        }}
        items={timelineItemsList}
      >
        {timelineItemsList.map(eachItems => renderTimeLine(eachItems))}
      </Chrono>
    </div>
  )
}

export default TimelineView
