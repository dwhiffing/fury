const os = require('os')
const platform = os.type() === 'Darwin' ? 'mac' : 'windows'
const platformSlashes = platform === 'mac' ? '/' : '\\'
const shell = require('shelljs')

function log(data) {
  console.log(data)
  console.log('')
  console.log('')
}

shell.exec(`.${platformSlashes}doc-2-md.sh`)
log('Starting development server now, browser should open up momentarily.')
log(
  'If you make changes to word docs after this point: \nClose and re-open this terminal then `npm run start` again.'
)

log('Remember to exit this terminal when you are done.')
shell.exec('cuttlebelle', ['watch'])
