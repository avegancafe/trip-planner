import React from 'react'

export const Dump = props => (
  <div>
    You passed in:{' '}
    <pre>
      <code>{JSON.stringify(props, null, 2)}</code>
    </pre>
  </div>
)
