import { generateContracts, generateComponent } from './generators'

async function run() {
  const args = process.argv.slice(2)
  const generateType = args[0]
  switch (generateType) {
    case 'component':
      return generateComponent(args[1])
    case 'contract:dev':
      return generateContracts('dev')
    case 'contract:saleLaunchpadDev':
      return generateContracts('saleLaunchpadDev')
    case 'contract:saleLaunchpadRelease':
      return generateContracts('saleLaunchpadRelease')
    case 'contract:saleLaunchpadProd':
      return generateContracts('saleLaunchpadProd')
    case 'contract:release':
      return generateContracts('release')
    case 'contract:prod':
      return generateContracts('prod')
    default:
      break
  }
}

run()
