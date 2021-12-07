import { CompiledData } from './types'

export function parseAbi(data?: CompiledData) {
  if (!data) return

  const contract = data.contracts['contract']

  const abis: {
    name: string
    abi?: string[]
  }[] = []

  for (const contractName in contract) {
    // console.log(contractName + ': ' + output.contracts['test.sol'][contractName].evm.bytecode.object)

    abis.push({
      name: contractName,
      abi: contract[contractName].abi,
    })
  }

  return abis
}
