import React from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'
import Home from './Home'

import Worker from '../worker/file.worker.js'

import { parseAbi } from '@/worker/util'
import { WorkerData, WorkerProps } from '@/worker/types'

// var worker: WorkerProps = new Worker() as WorkerProps
const worker: WorkerProps = new Worker() as WorkerProps

console.log('[](worker):', worker)

worker.onmessage = function (event: WorkerData) {
  console.log('[](main):', event)

  const { data: payload } = event

  const { data, type }: { data?: any; type: 'function' | 'contract' | 'loadVersion' } = payload

  if (type == 'function' || type == 'contract') {
    const result = parseAbi(data)
    console.log('[](parsed-result):', result)
  }
}

worker.postMessage<WorkerData>({
  // type: 'contract',
  // data: 'contract C { function f() public { } }',
  type: 'function',
  data: 'function f() public { }',
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
})

// worker.postMessage<WorkerData>({
//   type: 'loadVersion',
//   data: '',
// })

export default function App() {
  return (
    <>
      <Switch>
        <Route strict exact path="/home" component={Home} />

        <Redirect from="/" to="/home" />
      </Switch>
    </>
  )
}
