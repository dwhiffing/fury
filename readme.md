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

- Git pull (to make sure any changes I make are pulled)
- Make all necessary changes to word documents
- Open terminal (ctrl+~) and `npm run start` 
- Look at changes in git tab, update index.yml files to get correct labels/positioning
- Confirm site looks as expected after changes
- Open terminal, run `npm run build`, and wait for it to finish
- Syncronize "html" folder via WINscp, make sure both local and remote end with \html and /html respectively
- Confirm production site looks as expected
- Commit all changes with a descriptive message
- Git push (So I can help fix issues with changes)