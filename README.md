# cli

- To link a particular cli to core node module just run `npm link` in that cli root
- To Unlink => `npm unlink -g`

- In package.json, `"bin": "./commands.js",` marks the entry of cli command execution for that package/project as cli. We can create many entry points by making the "bin" a object.
