import { Contract } from '@ethersproject/contracts'
import { useMemo } from 'react'
import { useActiveWeb3React } from './web3'
import { Web3Provider } from '@ethersproject/providers'
import { isAddress } from '@/utils'

import ERC20_BYTES32_ABI from '@/abis/erc20_bytes32.json'
import MULTICALL_ABI from '@/abis/multicall2.json'
import ERC20_ABI from '@/abis/erc20.json'

import { Erc20, Multicall2 } from '@/abis/types'
import { AddressMap, MULTICALL2_ADDRESSES } from '@/constants/addresses'

export const AddressZero = '0x0000000000000000000000000000000000000000'

export function getSigner(library: Web3Provider, account: string) {
  return library.getSigner(account).connectUnchecked()
}

export function getAddress(address: string | AddressMap, chainId: number | undefined) {
  if (!chainId) return

  return typeof address == 'string' ? address : address ? address[chainId] : undefined
}

export function getSignerOrProvider(library: Web3Provider, account?: string | null) {
  return account ? getSigner(library, account) : library
}

export function useContract<T extends Contract = Contract>(
  _address: AddressMap | string | undefined,
  ABI: any[],
  withSigner = true
): T | undefined {
  const { library, account, chainId } = useActiveWeb3React()

  const address = useMemo(() => {
    if (!chainId) return
    return typeof _address == 'string' ? _address : _address ? _address[chainId] : undefined
  }, [_address, chainId])

  return useMemo(() => {
    if (!library || !account || !address) return

    if (!isAddress(address) || address === AddressZero) {
      throw Error(`Invalid 'address' parameter '${address}'.`)
    }

    // 默认所有合同带有签名
    const contract = new Contract(address, ABI, getSignerOrProvider(library, withSigner ? account : undefined))

    return contract
  }, [ABI, account, address, library, withSigner]) as T
  // 强制声明为T
}

export function useMulticall2Contract() {
  return useContract<Multicall2>(MULTICALL2_ADDRESSES, MULTICALL_ABI, false) as Multicall2
}

export function useTokenContract(tokenAddress?: string, withSigner?: boolean) {
  return useContract<Erc20>(tokenAddress, ERC20_ABI, withSigner)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | undefined {
  return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}
