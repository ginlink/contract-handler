import React, { memo } from 'react'
import { NETWORK_LABELS } from '@/constants/chains'
import { useActiveWeb3React } from '@/hooks/web3'
import { Space } from 'antd'
import styled from 'styled-components/macro'
import Web3Status from '../Web3Status'
import { TYPE } from '@/theme'

const Wrapper = styled(Space)``

function Header() {
  const { chainId } = useActiveWeb3React()

  return (
    <Wrapper>
      <TYPE.body color="white" lineHeight="unset">
        {NETWORK_LABELS[chainId ?? -1] ?? 'ErrorNetWork'}
      </TYPE.body>

      <Web3Status />
    </Wrapper>
  )
}

export default memo(Header)
