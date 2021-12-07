import * as solc from 'solc/wrapper'

// importScripts('./7.1.js')
// let compiler = solc && solc(self.Module)

importScripts('./7.1.js')

let compiler = solc && solc(self.Module)
self.onmessage = (msg) => {
  console.log('[](sub):', msg)

  const type = msg.data && msg.data.type || ''
  const data = msg.data && msg.data.data || ''
  const settings = msg.data && msg.data.settings || {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  }

  if (!type) return reply('', undefined)

  let input = {
    language: 'Solidity',
    sources: {
      'contract': {
        content: data,
      },
    },
    settings: settings,
  }

  switch (type) {
    case 'function':
      if (!compiler) return

      input.sources = {
        ...input.sources,
        'contract': {
          content: `contract Main { ${data} }`
        }
      }

      const result0 = JSON.parse(compiler.compile(JSON.stringify(input)))

      reply(type, result0)
      break;

    case 'contract':
      if (!compiler) return

      const result1 = JSON.parse(compiler.compile(JSON.stringify(input)))

      reply(type, result1)
      break;

    case 'loadVersion':
      const version = msg.data && msg.data.version

      // importScripts('https://solc-bin.ethereum.org/bin/soljson-latest.js')

      console.log('[11111111]:',)

      importScripts('./7.1.js')

      compiler = solc && solc(self.Module)
      reply(type, true)
      break;

    default:
      break;
  }
}

function reply(type, data) {
  self.postMessage({
    type: type || 'result',
    data: data,
  })
}

export default class { }
