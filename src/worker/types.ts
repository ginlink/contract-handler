export interface Devdoc {
  kind: string
  methods: any
  version: number
}

export interface Bytecode {
  linkReferences: any
  object: string
  opcodes: string
  sourceMap: string
}

export interface DeployedBytecode {
  immutableReferences: any
  linkReferences: any
  object: string
  opcodes: string
  sourceMap: string
}

export interface Creation {
  codeDepositCost: string
  executionCost: string
  totalCost: string
}

export interface External {
  f(): string
}

export interface GasEstimates {
  creation: Creation
  external: External
}

export interface Code {
  begin: number
  end: number
  name: string
  source: number
  value: string
}

export interface Code2 {
  begin: number
  end: number
  name: string
  source: number
  value: string
}

export interface MethodIdentifiers {
  f(): string
}

export interface Evm {
  assembly: string
  bytecode: Bytecode
  deployedBytecode: DeployedBytecode
  gasEstimates: GasEstimates
  legacyAssembly: any
  methodIdentifiers: MethodIdentifiers
}

export interface Ewasm {
  wasm: string
}

export interface StorageLayout {
  storage: any[]
  types?: any
}

export interface Userdoc {
  kind: string
  methods: any
  version: number
}

export interface Data {
  abi: string[]
  devdoc: Devdoc
  evm: Evm
  ewasm: Ewasm
  metadata: string
  storageLayout: StorageLayout
  userdoc: Userdoc
}

export interface Contract {
  [key: string]: Data
}

export interface Contracts {
  contract: Contract
}

export interface SourceLocation {
  end: number
  file: string
  start: number
}

export interface Error {
  component: string
  errorCode: string
  formattedMessage: string
  message: string
  severity: string
  sourceLocation: SourceLocation
  type: string
}

export interface Contract2 {
  id: number
}

export interface Sources {
  contract: Contract2
}

export interface CompiledData {
  contracts: Contracts
  errors: Error[]
  sources: Sources
}

export type WorkerProps = {
  onmessage: (msg?: any) => void
  postMessage: <T = any>(msg?: T) => void
}

export type WorkerData = {
  type: 'function' | 'contract' | 'loadVersion'
  data?: any
  settings?: any
}
