import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Calendar } from 'antd'
import 'antd/dist/antd.css'

import { NavBar } from './NavBar'
import { Scheduler } from './Scheduler'

class _Root extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.navBar}>
          <NavBar />
        </div>
        <Scheduler />
      </div>
    )
  }
}

const styles = {
  navBar: {
    width: '100%'
  },
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
}

export const Root = hot(module)(_Root)
