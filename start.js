const spawn = require('child_process').spawn
const SpawnWatch = require('spawn-watch')
let spawnWatch = new SpawnWatch()

const os = require('os')
const platform = os.type() === 'Darwin' ? 'mac' : 'windows'
const platformSlashes = platform === 'mac' ? '/' : '\\'

function exec(command, args, callback) {
  const instance = spawn(command, args)
  instance.stdout.on('data', data => console.log(data.toString()))
  instance.stderr.on('data', data => console.log(data.toString()))
  instance.on('exit', data => {
    console.log(data.toString())
    callback()
  })
}

function log(data) {
  console.log(data)
  console.log('')
  console.log('')
}

function execWatch(command, args) {
  spawnWatch.errorStream.subscribe(log)
  spawnWatch.outEventStream.subscribe(log)
  spawnWatch.processEventStream.subscribe(log)
  spawnWatch.ipcStream.subscribe(log)

  spawnWatch.start({ command, args, options: {} })
}

exec(`.${platformSlashes}doc-2-md.sh`, ['-lh', '/usr'], function() {
  log('Starting development server now, browser should open up momentarily.')
  log(
    'If you make changes to word docs after this point: \nClose and re-open this terminal then `npm run start` again.'
  )

  log('Remember to exit this terminal when you are done.')
  execWatch('cuttlebelle', ['watch'])
})
