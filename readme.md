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

- hit ctrl+shift+p, type 'pull' and hit enter
- Modify/Add word docs as necessary
- Run `npm run generate` to generate the content
- Run `npm run build-html` to generate the html
- Open the 'fork' tab on the left side of VS Code
  - confirm all of your changes look as expected
  - update any index.yml files for positioning or labels, and discard any unwanted changes
  - add message at top and hit ctrl + enter to commit
  - Once all changes are commited, hit ctrl+shift+p, type 'push' and hit enter (make sure this is successful before proceeding, if it fails, it could be due to not pulling before making changes)
- Copy any changes over to your server

* Git pull
* add or change all the word documents
* run `npm run build`
* Go through all the changes in the fork tab, update any index.yml files to get correct labels/positioning
* Commit all the changes
* Do a git push
* Syncronize build folder via WINscp
