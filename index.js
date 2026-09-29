// Build android WebView variant (we.js) from WEUI.user.js.
//
// Usage:
//   node index.js [outputPath]
//   npm start -- [outputPath]
// Output defaults to ./we.js. Pass android res path explicitly, don't hardcode it.
const fs = require("fs");
const path = require("path");

const srcPath = path.join(__dirname, "WEUI.user.js");
const outPath = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(__dirname, "we.js");

let script = fs.readFileSync(srcPath, "utf-8").replace(/\r\n/g, "\n");

const queryBlock = `//__CREDENTIALS:QUERY__
let serviceNumber = new URLSearchParams(window.location.search).get("serviceNumber");
let password = new URLSearchParams(window.location.search).get("password");
//__END_CREDENTIALS__`;

const storageBlock = `//__CREDENTIALS:STORAGE__
let serviceNumber = localStorage.getItem("serviceNumber");
let password = localStorage.getItem("password");

if (!serviceNumber || !password){
  serviceNumber = prompt("Service Number");
  password = prompt("Password");
  localStorage.setItem("serviceNumber", serviceNumber);
  localStorage.setItem("password", password);
}
//__END_CREDENTIALS__`;

if (!script.includes(queryBlock)) {
  console.error("Credential marker block not found in WEUI.user.js, refusing blind regex replace.");
  process.exit(1);
}
script = script.replace(queryBlock, storageBlock);

// Android WebView build targets the official app domain, not the proxy host.
script = script.replace(
  "// @match        https://we-auth.mostafab2010.workers.dev/echannel/service/WEUIInternet?*",
  "// @match        https://app-my.te.eg/echannel/service/WEUIInternet?*"
);

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, script);
console.log(`Wrote ${outPath}`);
