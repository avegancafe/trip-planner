import React from 'react'
import { hot } from 'react-hot-loader'
import { Dump } from './Dump'

const _Root = props => (
  <div>
    Hello, {props.name}
    <div>
      <Dump a="1" b="2" />
    </div>
  </div>
)

export const Root = hot(module)(_Root)
