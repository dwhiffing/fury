const rimraf = require('rimraf')
const mv = require('mv')
const spawn = require('child_process').spawn
const os = require('os')
const platform = os.type() === 'Darwin' ? 'mac' : 'windows'
const platformSlashes = platform === 'mac' ? '/' : '\\'

function exec(command, args, callback) {
  console.log(`Running: "${command}"`)
  const instance = spawn(command, args)
  instance.stdout.on('data', data => console.log(data.toString()))
  instance.stderr.on('data', data => console.log(data.toString()))
  instance.on('exit', data => {
    console.log(data.toString())
    callback()
  })
}

exec(`.${platformSlashes}doc-2-md.sh`, ['-lh', '/usr'], function() {
  exec('cuttlebelle', {}, function() {
    rimraf('html', {}, function() {
      mv('site', 'html', function() {})
    })
  })
})
