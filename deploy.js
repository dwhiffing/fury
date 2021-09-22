var rsync = require('rsyncwrapper')

require('dotenv').config()

var USER = process.env.SSH_USER
var DOMAIN = process.env.DOMAIN
var FOLDER = process.env.FOLDER

rsync(
  {
    src: 'html/',
    dest: `${USER}@${DOMAIN}:${FOLDER}`,
    args: ['-a', '-v', '-u', '-z'],
  },
  function (error, stdout, stderr, cmd) {
    console.log(`Running command: ${cmd}`)
    if (error) {
      console.log(`Encountered Error: ${error.message} (${stderr})`)
    } else {
      console.log(`Success: ${stdout}`)
    }
  },
)
