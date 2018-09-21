import React from 'react'
import { Calendar } from 'antd'

import { Itinerary } from './Itinerary'

export const Scheduler = () => (
  <div style={styles.container}>
    <div style={styles.itinerary}>
      <Itinerary />
    </div>

    <div style={styles.calendar}>
      <Calendar fullscreen={false} />
    </div>
  </div>
)

const styles = {
  container: {
    display: 'flex',
    height: '100%'
  },
  itinerary: {
    flex: '1',
    margin: '10px 20px',
    marginRight: '20px'
  },
  calendar: {
    flex: '2',
    margin: '0 20px'
  }
}
