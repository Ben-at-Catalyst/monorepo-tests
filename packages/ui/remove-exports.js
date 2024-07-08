const fs = require("fs");
const packageJson = require("./package.json");

// Copy original package.json to a temporary location
fs.copyFileSync("package.json", "package.json.backup");

// Remove the "exports" field
delete packageJson.exports;

// Write the modified package.json back to the file
fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
