import React from 'react'

export const NavBar = () => (
  <div style={styles.navBar}>
    <a style={styles.navLink}>Planned</a>
    <a style={styles.navLink}>Older</a>
  </div>
)

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    backgroundColor: '#eee'
  },
  navLink: {
    padding: '10px 15px'
  }
}
