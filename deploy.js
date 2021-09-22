var rsync = require('rsyncwrapper')

require('dotenv').config()

var USER = process.env.SSH_USER || 'gunner9898@northernfury.us'
var DOMAIN = process.env.DOMAIN || 'atlas.hostineer.com'
var FOLDER = process.env.FOLDER || '/var/www/html'
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
