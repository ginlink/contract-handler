import { NETWORK_LABELS } from '@/constants/chains'
import { useActiveWeb3React } from '@/hooks/web3'
import React, { memo } from 'react'
import styled from 'styled-components/macro'
import Web3Status from '../Web3Status'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;

  z-index: 1;
`
const Empty = styled.div`
  width: 23px;
`

function HeaderPC() {
  const { chainId } = useActiveWeb3React()
  return (
    <Wrapper>
      {NETWORK_LABELS[chainId ?? -1] ?? 'ErrorNetWork'}
      <Empty />
      <Web3Status />
    </Wrapper>
  )
}

export default memo(HeaderPC)
