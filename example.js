const Argv = require('./argv-parser')
const argv = new Argv()
console.log(`Args: ${argv.getArgs().join(' ')}\n\n`)

console.log(`This script is${argv.hasFlag('secure') ? ' ' : 'n\'t '}running in secure mode.`)

console.log()

if (argv.get('name')) {
  console.log(`Hello, ${argv.get('name')}!`)
}
