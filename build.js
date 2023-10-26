const execSync = require("child_process").execSync;

execSync("bun build --target=browser --minify --outdir=dist src/index.js");
execSync("cp index.html dist/")
execSync("cp manifest.json dist/")