## Required tools

- VS Code (https://code.visualstudio.com/)
- Node (https://nodejs.org/en/)
- Git (https://git-scm.com/)
- pandoc (https://pandoc.org/installing.html)
- Make github account

# Get started

- Make sure all required tools are installed
- Open VS Code and Clone repo (ctrl+shift+p, type in clone, hit enter, paste this url: https://github.com/dwhiffing/fury.git)
- ctrl + ~ to open a terminal then enter `npm install`
- Once the install is finished, test out dev mode by running `npm start`

# To update site

- Git pull (to make sure all recent changes are in)
- Add or change all the word documents
- Open terminal if not already open(ctrl+~) and run `npm run generate` and then `npm run start`
- Wait for build to finish, IE will open when its done
- Go through all the changes in the git tab, update any index.yml files to get correct labels/positioning (while confirming changes in IE as they are made)
- Open terminal if not already open(ctrl+~) and run `npm run generate` and then `npm run build`
- Commit all the changes
- Do a git push
- Syncronize build folder via WINscp
