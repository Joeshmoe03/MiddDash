# Setup

**Prerequisite:** git, vscode (preferred)

**We use Node.js:** https://nodejs.org/en. We install this in the following step.

**In terminal:**

- git config --global user.name "your name"
- git config --global user.email "your email address"
- git config --global init.defaultBranch main
- git config --global color.ui auto

**OSX/Linux ONLY:**

- nvm install lts/hydrogen
- nvm use lts/hydrogen
- npm set init-author-email "email address"
- npm set init-author-name "name"
- npm set init-license "Apache-2.0"

**Windows ONLY:**

- choco install nodejs-lts (if nodejs-lts not installed)
- npm set init-author-email "email address"
- npm set init-author-name "name"
- npm set init-license "Apache-2.0"

**Install MySQL**
Video Tutorial : https://www.youtube.com/watch?v=u96rVINbAUI

WINDOWS: https://dev.mysql.com/downloads/windows/installer/8.0.html

- download version 8.0.35 ( latest version is causing some installation problems ) for your respective operating system
- once you begin installer, choosing setup type > custom
- install only server and workbench ( other products not necessary )
- MySQL Server > MySQL Server > MySQL Server 8.0 > latest version ( 8.0.35 )
- Applications > MySQL Workbench > MySQL Workbench 8.0 > latest version ( 8.0.34)
- execute installer and continue with default values ( dont touch anything keep clicking next )
- come up with a password ( can be any password for now )

MAC:
Server: https://gist.github.com/nrollr/3f57fc15ded7dddddcc4e82fe137b58e
WorkBench: https://dev.mysql.com/downloads/workbench/

- similar installation to Windows

Will go over next steps in next meeting ( setting up server and sample database for practice )

**Install Express**

- In terminal: "npm i express"

**DO NOT DO THIS BUT READ THIS**

- See for install?: "https://github.com/facebook/create-react-app"
- If you are creating a project yourself for the first time: "npm init react-app my-app"

**Create react app with Typescript template
- npx create-react-app . --template typescript
