import React from 'react'
import styled from 'styled-components/macro'
import * as solc from 'solc'

const Wrapper = styled.div``

function compile2json() {
  // const input = {
  //   language: 'Solidity',
  //   sources: {
  //     'test.sol': {
  //       content: 'contract C { function f() public { } }',
  //     },
  //   },
  //   settings: {
  //     outputSelection: {
  //       '*': {
  //         '*': ['*'],
  //       },
  //     },
  //   },
  // }
  // const output = JSON.parse(solc.compile(JSON.stringify(input)))
  debugger
  // `output` here contains the JSON output as specified in the documentation
  // for (const contractName in output.contracts['test.sol']) {
  //   console.log(contractName + ': ' + output.contracts['test.sol'][contractName].evm.bytecode.object)
  // }
}

compile2json()

export default function Home() {
  return <Wrapper>Home</Wrapper>
}
