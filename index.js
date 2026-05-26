// convert to android WE

const fs = require("fs")

let script = fs.readFileSync("WEUI.user.js", "utf-8")
script = script.replace(/serviceNumber = .*/, `serviceNumber = localStorage.getItem("serviceNumber");`)
let no_user_or_pass = `if (!serviceNumber || !password){
  serviceNumber = prompt("Service Number");
  password = prompt("Password");
  localStorage.setItem("serviceNumber", serviceNumber);
  localStorage.setItem("password", password);
}`
script = script.replace(/password = .*/, `password = localStorage.getItem("password");\n\n${no_user_or_pass}`)

fs.writeFileSync("we.js", script)
fs.writeFileSync("d:\\Programming\\Android\\utilities\\elnet\\app\\src\\main\\res\\raw\\we.js", script)