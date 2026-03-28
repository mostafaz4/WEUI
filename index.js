// convert to android WE

const fs = require("fs")

let script = fs.readFileSync("WEUI.user.js", "utf-8")
script = script.replace(/^[\s]*\/\/.*$/gm, '')//.replace(/^[\r\n]*$/gm, "")
let html_match = script.match(/\(function\(\){[\s+]*document.write\(`([\s\S]+)`\)[\s+]*}\(\)\)/)
let script_no_html = script.replace(html_match[0], "")
script_no_html = script_no_html.replace(/serviceNumber = .*/, `serviceNumber = localStorage.getItem("serviceNumber");`)
let no_user_or_pass = `if (!serviceNumber || !password){
  serviceNumber = prompt("Service Number");
  password = prompt("Password");
  localStorage.setItem("serviceNumber", serviceNumber);
  localStorage.setItem("password", password);
}`
script_no_html = script_no_html.replace(/password = .*/, `password = localStorage.getItem("password");\n\n${no_user_or_pass}`)
let merged = `<!DOCTYPE html>\n${html_match[1]}\n<script>${script_no_html}</script>`

fs.writeFileSync("we.html", merged)