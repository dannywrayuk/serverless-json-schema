const { publish } = require("gh-pages");
const fs = require("fs");

const serverlessVersion = JSON.parse(
  fs.readFileSync("node_modules/@types/serverless/package.json").toString()
).version;

fs.copyFileSync("dist/latest.json", `dist/${serverlessVersion}.json`);

publish("dist", { add: true });
