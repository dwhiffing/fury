const os = require('os')
const platform = os.type() === 'Darwin' ? 'mac' : 'windows'
const platformSlashes = platform === 'mac' ? '/' : '\\'
const shell = require('shelljs')

shell.exec(`.${platformSlashes}doc-2-md.sh`)
shell.exec('cuttlebelle')
shell.rm('-r', 'html')
shell.mv('site', 'html')
