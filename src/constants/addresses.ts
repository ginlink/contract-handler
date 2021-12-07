import { SupportedChainId } from './chains'

export type AddressMap = {
  [chianId: number]: string
}

export const MULTICALL2_ADDRESSES: AddressMap | string = {
  [SupportedChainId.BSCTEST]: '0xC4eB70E1C4C1d866fb4f1Be73AA458dCDe9a1F99',
  [SupportedChainId.BSC]: '0x193869c927F2e416E71c3D178266cD2faf7ca2d0',
}
