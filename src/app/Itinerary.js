import React, { Component } from 'react'
import { Button, Input } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export class Itinerary extends Component {
  state = {
    name: '',
    times: []
  }

  addTime = () => {
    this.setState(({ times }) => ({
      times: [...times, null]
    }))
  }

  render() {
    return (
      <div style={styles.container}>
        <label>
          <span>Name</span>
          <Input style={styles.input} value={this.state.name} />
        </label>
        {this.state.times.map((_, i) => (
          <div key={i} style={styles.name}>
            <label>
              <span>Time {i + 1}</span>
              <Input style={styles.input} value={this.state.name} />
            </label>
          </div>
        ))}
        <div style={styles.addButton}>
          <Button onClick={this.addTime}>
            <FontAwesomeIcon icon={faPlus} /> New Time
          </Button>
        </div>
        <div style={styles.divider} />
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'relative',
    height: '100%'
  },
  name: {
    marginTop: '20px'
  },
  divider: {
    position: 'absolute',
    width: '1px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    right: '-20px',
    top: '10px',
    bottom: '10px'
  },
  addButton: {
    marginTop: '10px'
  }
}
