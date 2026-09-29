// ==UserScript==
// @name         WEUI
// @version      2026-09-29.6
// @namespace    https://github.com/mostafaz4/WEUI/
// @updateURL    https://raw.githubusercontent.com/mostafaz4/WEUI/master/WEUI.user.js
// @description  Better WE.eg user interface
// @author       Bondok
// @match        https://we-auth.mostafab2010.workers.dev/echannel/service/WEUIInternet?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

// prevent original page loading
window.stop();

//#region parameters

let maxHistory = 35;
const maxHistoryMobile = 4;

//#endregion

//#region write page html

var title = "WE Consumption details"
var style = `

  body {
    background-color: black;
    background-image: url('data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QNTaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCMkE5QjBCODhEQTExRUE5MjI4OTM3RjJGQUU2RjM0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCMkE5QjBBODhEQTExRUE5MjI4OTM3RjJGQUU2RjM0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YmEwMmYxM2EtMmM1ZS1kMzQ5LTkwM2MtNTg4NjczNjRlZGMxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YmEwMmYxM2EtMmM1ZS1kMzQ5LTkwM2MtNTg4NjczNjRlZGMxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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');
  }

  * {
    color: white;
    font-family: arial, sans-serif;
  }

  .usageHistoryTable * {
    color: gray;
  }

  .usageHistoryTable td {
    color: gray;
    text-align: right;
    border-bottom: 1px solid #333 !important;
    border-radius: 5px;
  }

  .usageHistoryTable.d-none tr:not(:first-child) {
    display: none;
  }

  .raw {}

  .progressLayoutBackground{
    width: 100%;
    background-color: #2f2f2f;
    float: left;
  }

  .progressbar{
    width: 0%;
    background-color: rgb(37, 111, 0);
    position: absolute;
    transition: all 0.5s ease 0s;
    float: left;
  }

  .progressbarInfoTable{
    position: absolute;
    width: 100%;
  }

  .tip {
    margin-top: 41px;
    padding: 2px 4px;
    font-size: 11px;
    color: #fff;
    left: calc(0% - 21px);
    position: absolute;
    z-index: 2;
    background: #333;
    border: solid #5d5d5d 1px;
    border-radius: 5px;
    line-height: 11px;
  }

  .tip:before {
    border: solid;
    border-color: rgb(255, 213, 62) transparent;
    border-width: 0px 4px 6px 4px;
    content: "";
    display: block;
    position: absolute;
    left: 16px;
    top: -45%;
    z-index: 9;
  }

  .tip-top {
    margin-top: -18px;
    padding: 2px 4px;
    font-size: 11px;
    color: #fff;
    left: calc(0% - 21px);
    position: absolute;
    z-index: 2;
    background: #333;
    border: solid #5d5d5d 1px;
    border-radius: 5px;
    line-height: 11px;
    transition: all 0.5s ease 0s;
  }

  .tip-top:before {
    border: solid;
    border-color: rgb(255, 213, 62) transparent;
    border-width: 6px 4px 0px 4px;
    content: "";
    display: block;
    position: absolute;
    left: 16px;
    top: 107%;
    z-index: 9;
  }

  #info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: #0e0e0e;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 0px 10px 10px black;

    min-width: 320px;
  }

  span {
    color: lightgreen;
  }

  .button {
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s;
    /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
  }

  .buttonRefresh {
    background-color: #151515;
    color: #a7a7a7;
    border: 2px solid #313131;
    border-radius: 5px;
    width: -webkit-fill-available;
    height: 40px;
    cursor: pointer;
  }

  .buttonRefresh:hover {
    background-color: #171717;
    color: white;
  }

  .nobundleView> :nth-child(n+3) {
    display: none !important;
  }

  .transition {
    transition: all 0.5s ease 0s;
  }

  .dim {
    filter: brightness(0.5);
  }

  .bad-red {
    color: #905a5a
  }
  .good-light-green {
    color: lightgreen
  }

  .captcha {
    position: fixed;
    width: 100%;
    background-color: #0000006b;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .captcha div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    padding: 25px;
    background-color: #0c0c0c;
    border-radius: 10px;
    gap: 10px;
  }
`
var html = `<html><meta name="color-scheme" content="dark" /><div id="error"></div>
<div id="rawUsageResponse" class="raw" style="margin-top: 100vh;"></div>
<div id="rawBalanceResponse" class="raw"></div>
<div id="info">
  <h3 align="center" style="margin: 0.4em;"><span class="freeUnitEnName"></span></h3>
  <h4 style="margin-bottom: 10px;">Rem: <span class="freeAmount"></span> <span class="measureUnitEnName"></span> for <span class="remainingDaysForRenewal"></span></h4>
  <h4 style="margin-top: 10px;">Rate: <span class="compAvgUsage"></span> <span class="measureUnitEnName"></span>/day, <span class="usetimepercentage"></span> <span class="measureUnitEnName"></span> safe.</h4>

  <h4 class="pbWrapper" style="display: flow-root; line-height: 30px;position: relative;">
      <span class="tip-top" id="progressbarValue">0%</span>
      <div class="progressLayoutBackground">&nbsp;</div>
      <div id="progressbar" class="progressbar">&nbsp;</div>
      <table class="progressbarInfoTable">
        <tr>
          <td style="padding: 0px 8px;">
            <span class="usedAmount"></span> <span class="measureUnitEnName"></span>
          </td>
          <td style="text-align: end; padding: 0px 8px;">
            <span class="initialTotalAmount"></span> <span class="measureUnitEnName"></span>
          </td>
        </tr>
      </table>
  </h4>

  <h4 class="pbDateWrapper" style="display: flow-root;margin-top: -20px;">
    <div style="line-height: 30px;position: relative;">
      <span class="tip" style="margin-top: 31px !important;" id="progressbarDateValue">0%</span>
      <div class="progressLayoutBackground">&nbsp;</div>
      <div id="progressbarDate" class="progressbar">&nbsp;</div>
      <table class="progressbarInfoTable">
        <tr>
          <td style="padding: 0px 8px;">
            <span class="subscriptionDate"></span>
          </td>
          <td style="padding: 0px 8px; text-align: end;">
            <span class="renewalDate"></span>
          </td>
        </tr>
      </table>
    </div>
  </h4>

  <div id="infoSpecimen" style="display: none;">
    <h3><span class="freeUnitEnName{packageName}" style="text-align: center; display: none;"></span></h3>
    <h4 class="pbExtraWrapper{packageName}" style="display: none;">
      <div style="line-height: 40px;position: relative;">
        <span class="tip" id="progressbarDateValue{packageName}">0%</span>
        <span class="tip-top" id="progressbarValue{packageName}">0%</span>
        <div class="progressLayoutBackground">&nbsp;</div>
        <div id="progressbar{packageName}" class="progressbar">&nbsp;</div>
        <div id="progressbarDate{packageName}" style="width: 0%;background-color: rgb(163, 204, 85);position: absolute;transition: all 0.5s ease 0s;float: left;height: 3px; margin-top: 37px;">&nbsp;</div>
        <table class="progressbarInfoTable" style="border-spacing: 0px;">
          <tr>
            <td style="width: 30%;">
              <span class="usedAmount{packageName}" style="margin-left: 8px;"></span> <span class="measureUnitEnName{packageName}"></span>
            </td>
            <td align="center">
              <span style="color: white; display: table-cell;">&#9507;&nbsp;</span>
                <div style="display: table-cell; line-height: 20px; vertical-align: middle; text-align: start;">
                  <span class="freeAmount{packageName}"></span>&nbsp;<span class="measureUnitEnName{packageName}"></span>
                  <br>
                  <span class="remainingDaysForRenewal{packageName}"></span>
                </div>
            </td>
            <td style="text-align: end; width: 30%;">
              <span class="initialTotalAmount{packageName}"></span> <span class="measureUnitEnName{packageName}" style="margin-right: 8px;"></span>
            </td>
          </tr>
        </table>
      </div>
    </h4>
  </div>

  <div id="overAll" style="display: none;">
    <h3>
      <hr style="border: 1px solid #8c8c8c;"><span class="freeUnitEnName_overAll" style="text-align: center;display: none;font-size: initial;color: #ddefff;">Overall Quota</span>
    </h3>
    <h4 class="pbExtraWrapper_overAll" style="display: none; margin-bottom: 10px;">
      <div style="line-height: 40px;position: relative;">
        <span class="tip-top" id="progressbarValue_overAll">0%</span>
        <div class="progressLayoutBackground">&nbsp;</div>
        <div id="progressbar_overAll" class="progressbar">&nbsp;</div>
        <table class="progressbarInfoTable" style="border-spacing: 0px; table-layout: fixed;">
          <tr>
            <td style="padding: 0px 8px;">
              <span class="usedAmount_overAll"></span>&nbsp;<span class="measureUnitEnName_overAll"></span>
            </td>
            <td>
                &#9507;&nbsp;<span class="freeAmount_overAll"></span>&nbsp;<span class="measureUnitEnName_overAll"></span>
            </td>
            <td style="text-align: end; padding: 0px 8px;">
              <span class="initialTotalAmount_overAll"></span> <span class="measureUnitEnName_overAll"></span>
            </td>
          </tr>
        </table>
      </div>
    </h4>
  </div>

  <div style="display: flex; position: absolute; pointer-events: none; font-size: 10px; margin-top: 25px; place-items: center; justify-self: anchor-center; gap: 50px;">
    <span style="color: gray; flex-grow: 1;" id="balance"></span>
    <span style="color: gray;" id="lastRefresh"></span>
  </div>

</div><html>`

document.head.parentNode.innerHTML = `<title>${title}</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${style}</style>${html}`

//#endregion

//#region state

window.onerror = function (error, _url, line) {
  console.error(`${line}: ${error}`);
  const errBox = document.querySelector("#error");
  if (errBox) {
    errBox.textContent = `${line}: ${error}`;
  }
};

//__CREDENTIALS:STORAGE__
let serviceNumber = localStorage.getItem("serviceNumber");
let password = localStorage.getItem("password");

if (!serviceNumber || !password){
  serviceNumber = prompt("Service Number");
  password = prompt("Password");
  localStorage.setItem("serviceNumber", serviceNumber);
  localStorage.setItem("password", password);
}
//__END_CREDENTIALS__

const unitEnIds = { 1106: "B", 1107: "KB", 1108: "MB", 1109: "GB", 1004: "min" };
const HOST = "we-auth.mostafab2010.workers.dev";
const SERVICE_URL = `https://${HOST}/echannel/service`;
const CAPTCHA_URL = "https://captcha.te.eg/api/Captcha/GenerateCaptcha";
const MAIN_INTERNET_CODE = "C_TED_Primary_Fixed_Data";
const LANDLINE_CODE = "C_FV_Normal_VoiceI";

let isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  document.body.style.background = "none";
  isMobile = true;
}
if (isMobile) {
  maxHistory = maxHistoryMobile;
}

// Runtime state shared across render + API layers.
let loginObj;
let usageObj;
let balanceObj;
let appVersionNo;
let dataDate;
Object.defineProperties(window, {
  loginObj: { get: () => loginObj, set: (v) => { loginObj = v; }, configurable: true },
  usageObj: { get: () => usageObj, set: (v) => { usageObj = v; }, configurable: true },
  balanceObj: { get: () => balanceObj, set: (v) => { balanceObj = v; }, configurable: true }
});
let main_bundle;
let main_bundle_name = MAIN_INTERNET_CODE;
let dnew = 0;
let dold = 0;
let dpercent = 0;
let xhr_login;
let captcha_send_json;

let deviceid = generateRandomHexString(16);
if ((serviceNumber || "").trim().length > 0) {
  const storedDeviceId = localStorage.getItem(`${serviceNumber}_deviceid`);
  if (storedDeviceId) {
    deviceid = storedDeviceId;
  } else {
    localStorage.setItem(`${serviceNumber}_deviceid`, deviceid);
  }
}

//#endregion

//#region dom helpers

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
function ForDoms(selector, action) {
  for (const el of $$(selector)) {
    action(el);
  }
}
function setText(selector, value, root = document) {
  for (const el of $$(selector, root)) {
    el.textContent = value;
  }
}
function setBar(barSelector, tipSelector, percentText) {
  const bar = $(barSelector);
  const tip = $(tipSelector);
  if (bar) {
    bar.style.width = percentText;
  }
  if (tip) {
    tip.textContent = percentText;
    tip.style.left = `calc(${percentText} - 21px)`;
  }
}
// Midnight-to-midnight window for an effective/expire pair; guards NaN on bad API dates.
function bundleWindow(effectiveTime, expireTime) {
  const startLabel = new Date(effectiveTime).toLocaleString("en-CA", { day: "2-digit", month: "2-digit", year: "numeric" });
  const endLabel = new Date(expireTime).toLocaleString("en-CA", { day: "2-digit", month: "2-digit", year: "numeric" });
  const start = new Date(`${startLabel} 0:0:0`).getTime();
  const end = new Date(`${endLabel} 0:0:0`).getTime();
  if (!Number.isFinite(start) || !Number.isFinite(end) || end === start) {
    return { start: Date.now(), end: Date.now() + 86400000, percent: 0 };
  }
  return { start, end, percent: ((Date.now() - start) / (end - start)) * 100 };
}
function normalizeBundle(bundle) {
  bundle.usedAmount = bundle.initialAmount - bundle.currentAmount;
  bundle.usagePercentage = ((bundle.usedAmount / bundle.initialAmount) * 100).toFixed();
  return bundle;
}
function bundleList() {
  return usageObj?.body?.[0]?.freeUnitBeanDetailList ?? [];
}
function bundleListFrom(usage) {
  return usage?.body?.[0]?.freeUnitBeanDetailList ?? [];
}
function balanceText() {
  if (balanceObj === undefined) {
    return "loading...";
  }
  return `${(balanceObj.body.balanceInfo[0].totalAmount / 10000).toFixed(2)} EGP`;
}
function formatYMD(time) {
  const d = new Date(time);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

//#endregion

//#region utils

function loadHistory(savedLogName) {
  try {
    const parsed = JSON.parse(localStorage.getItem(savedLogName) ?? "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
function saveHistory(savedLogName, history) {
  localStorage.setItem(savedLogName, JSON.stringify(history));
}
function generateRandomHexString(length) {
  let out = "";
  for (let i = 0; i < length; i++) {
    out += Math.floor(Math.random() * 16).toString(16);
  }
  return out;
}
function diffToDaysAhead(days) {
  return new Date(new Date().setHours(days * 24, 0, 0, 0)) - Date.now();
}
function formatedDate(date) {
  const timeStr = date.toLocaleString("en-eg", { hour: "2-digit", minute: "2-digit", hour12: true });
  const dateStr = date.toLocaleString("en-uk", { day: "2-digit", month: "short" });
  return `${dateStr} ${timeStr}`;
}
function msToTime(duration) {
  const minutes = String(Math.floor((duration / 60000) % 60)).padStart(2, "0");
  const hours = String(Math.floor((duration / 3600000) % 24)).padStart(2, "0");
  return `${hours}h ${minutes}m`;
}
function safeParse(text, fallback) {
  try {
    return JSON.parse(text);
  } catch {
    return fallback;
  }
}

//#endregion

//#region api

async function getCaptchaToken() {
  const res = await fetch(CAPTCHA_URL, {
    method: "POST",
    referrerPolicy: "no-referrer",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ merchantName: "E-Care", serviceName: "Login", identifier: serviceNumber })
  });
  const json = await res.json();
  return { token: json.token, image: json.captcha };
}

function sendCaptcha() {
  const input = document.querySelector("#captcha_solution");
  captcha_send_json.imgCode = input?.value ?? "";
  xhr_login.send(JSON.stringify(captcha_send_json));
  for (const node of document.querySelectorAll(".captcha")) {
    node.remove();
  }
}

function createLoginRequest(payload) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `${SERVICE_URL}/besapp/base/rest/busiservice/v1/auth/userAuthenticate`);
  prepare_xhr(xhr);
  const promise = new Promise((resolve, reject) => {
    xhr.onload = () => {
      saveAuthHeaders(xhr.response);
      resolve(xhr.response);
    };
    xhr.onerror = () => {
      reject(new Error("Login xhr error"));
    };
    xhr.send(JSON.stringify(payload));
  });
  return { xhr, promise };
}

function createPendingLoginRequest(payload) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `${SERVICE_URL}/besapp/base/rest/busiservice/v1/auth/userAuthenticate`);
  prepare_xhr(xhr);
  const promise = new Promise((resolve, reject) => {
    xhr.onload = () => {
      saveAuthHeaders(xhr.response);
      resolve(xhr.response);
    };
    xhr.onerror = () => {
      reject(new Error("Login xhr error"));
    };
  });
  void payload;
  return { xhr, promise };
}

async function Login() {
  // Raw XHR (not postAPI): captcha flow defers .send() until user solves overlay.
  const captchaToken = await getCaptchaToken();
  captcha_send_json = {
    acctId: `FBB${serviceNumber.replace(/^0+/, "")}`,
    password,
    appLocale: "en-US",
    isSelfcare: "Y",
    isMobile: "Y",
    imgCacheKey: captchaToken.token
  };
  if (!captchaToken.image) {
    return createLoginRequest(captcha_send_json).promise;
  }
  const overlay = document.createElement("div");
  overlay.className = "captcha";
  const box = document.createElement("div");
  const img = document.createElement("img");
  img.src = captchaToken.image;
  const input = document.createElement("input");
  input.type = "text";
  input.id = "captcha_solution";
  const button = document.createElement("button");
  button.textContent = "submit";
  button.addEventListener("click", sendCaptcha);
  box.append(img, input, button);
  overlay.append(box);
  document.body.append(overlay);
  const pending = createPendingLoginRequest(captcha_send_json);
  xhr_login = pending.xhr;
  return pending.promise;
}

function parseAuthCookies() {
  const out = {};
  for (const part of document.cookie.split(";")) {
    const eq = part.indexOf("=");
    if (eq < 0) {
      continue;
    }
    const key = part.slice(0, eq).trim();
    const value = part.slice(eq + 1).trim();
    if (key.length === 0 || value.length === 0) {
      continue;
    }
    out[key] = value;
  }
  return out;
}

function saveAuthHeaders(responseText) {
  const cookieObj = parseAuthCookies();
  localStorage.setItem(`${serviceNumber}_headers`, JSON.stringify([
    { key: "csrftoken", value: safeParse(responseText, {}).body?.token ?? "" },
    { key: "indiv_login_token", value: cookieObj.indiv_login_token },
    { key: "refresh_token", value: cookieObj.refresh_token }
  ]));
}

// Single XHR helper: every API call goes through here except Login captcha flow.
function postAPI(path, body) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${SERVICE_URL}${path}`);
    prepare_xhr(xhr);
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = () => {
      reject(new Error(`POST ${path} failed`));
    };
    if (body === null || body === undefined) {
      xhr.send(null);
    } else if (typeof body === "string") {
      xhr.send(body);
    } else {
      xhr.send(JSON.stringify(body));
    }
  });
}

async function RefreshAppToken() {
  const number = `FBB${serviceNumber.replace(/^0+/, "")}`;
  const res = await postAPI("/besapp/base/rest/busiservice/cz/v1/common/refreshAppToken", {
    loginId: number,
    servNumber: number
  });
  saveAuthHeaders(res);
  return res;
}

async function GetUserRoleCz() {
  return postAPI("/besapp/base/rest/busiservice/cz/v1/user/getUserRoleCz", null);
}

async function isLoggedIn() {
  try {
    const roleRes = await GetUserRoleCz();
    return JSON.parse(roleRes).header.retCode === "0";
  } catch {
    return false;
  }
}

async function GetUsage(subscriberId) {
  return postAPI("/besapp/base/rest/busiservice/cz/cbs/bb/queryFreeUnit", { subscriberId });
}

async function GetBalance(acctId) {
  return postAPI("/besapp/base/rest/busiservice/cbs/ar/queryBalance", { acctId });
}

// Shared quota fetch used by Main + switchToLandline.
async function fetchQuota(subscriberId, acctId) {
  const usageRes = await GetUsage(subscriberId);
  const usage = safeParse(usageRes, {});
  const usagePre = document.createElement("pre");
  usagePre.textContent = JSON.stringify(usage, null, 4);
  const usageBox = document.querySelector("#rawUsageResponse");
  if (usageBox) {
    usageBox.replaceChildren(usagePre);
  }
  for (const bundle of bundleListFrom(usage)) {
    normalizeBundle(bundle);
  }
  const balanceRes = await GetBalance(acctId);
  const balance = safeParse(balanceRes, {});
  const balancePre = document.createElement("pre");
  balancePre.textContent = JSON.stringify(balance, null, 4);
  const balanceBox = document.querySelector("#rawBalanceResponse");
  if (balanceBox) {
    balanceBox.replaceChildren(balancePre);
  }
  return { usage, balance };
}

async function getLatestAppVersionNumber() {
  try {
    const res = await fetch(`${SERVICE_URL}/besapp/base/rest/busiservice/cz/v1/cms/getCzAppVersionList`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"versionType":"P","versionStatus":"R","appType":"Selfcare","osType":"google"}`
    });
    const versionList = await res.json();
    return versionList.body[0].versionNo;
  } catch (ex) {
    console.error(ex);
    return "1.0.0";
  }
}

function prepare_xhr(xhr) {
  xhr.withCredentials = true;
  const headers = {
    accept: "application/json, text/plain, */*",
    languagecode: "en-US",
    ismobile: "true",
    iscoporate: "false",
    isselfcare: "true",
    channelid: "704",
    delegatorsubsid: "",
    systemtype: "android",
    deviceid,
    "Content-Type": "application/json",
    clienttype: "google",
    appversionno: appVersionNo
  };
  if (loginObj?.body?.token) {
    headers.csrftoken = loginObj.body.token;
  }
  const extraHeaders = localStorage.getItem(`${serviceNumber}_headers`);
  if (extraHeaders !== null) {
    for (const entry of safeParse(extraHeaders, [])) {
      headers[entry.key] = entry.value;
    }
    if (headers.refresh_token) {
      headers.mrefresh_token = headers.refresh_token;
    }
  }
  for (const [key, value] of Object.entries(headers)) {
    xhr.setRequestHeader(key, value);
  }
}

//#endregion

//#region render main card + extra bundles

function refreshOverAll() {
  for (const node of $$(".auto-tip")) {
    node.remove();
  }
  const overAll = $(":scope #overAll") ?? $("#overAll");
  if (!overAll) {
    return;
  }
  overAll.style.display = "block";
  const list = bundleList();
  let sumInitial = 0;
  let sumUsed = 0;
  for (const item of list) {
    sumInitial += item.initialAmount;
    sumUsed += item.usedAmount;
  }
  let sumPct = "0.00";
  if (sumInitial !== 0) {
    sumPct = ((sumUsed / sumInitial) * 100).toFixed(2);
  }
  setText(".freeUnitEnName_overAll", "Overall Quota");
  ForDoms(".freeUnitEnName_overAll", (el) => {
    el.style.display = "block";
  });
  ForDoms(".pbExtraWrapper_overAll", (el) => {
    el.style.display = "flow-root";
  });
  setText(".initialTotalAmount_overAll", `${sumInitial}`);
  setText(".measureUnitEnName_overAll", unitEnIds[main_bundle.measureUnit]);
  setText(".usedAmount_overAll", sumUsed.toFixed(2));
  setText(".freeAmount_overAll", (sumInitial - sumUsed).toFixed(2));
  setText(".usagePercentage_overAll", sumPct);
  setBar("#progressbar_overAll", "#progressbarValue_overAll", `${sumPct}%`);
  const container = $(".pbExtraWrapper_overAll > div");
  if (!container) {
    return;
  }
  for (const item of list) {
    const win = bundleWindow(item.effectiveTime, item.expireTime);
    const pct = win.percent.toFixed(2);
    const tip = document.createElement("span");
    tip.textContent = `${pct}%`;
    tip.className = "tip auto-tip";
    tip.style.left = `calc(${pct}% - 21px)`;
    container.append(tip);
    const bar = document.createElement("div");
    bar.className = "auto-tip";
    bar.style.cssText = `width: ${pct}%; background-color: rgb(163 204 85 / 25%); position: absolute; transition: 0.5s; float: left; height: 3px; margin-top: 37px;`;
    bar.textContent = "";
    container.append(bar);
  }
}

function bundleDomKey(bundle) {
  if (bundle.itemCode === main_bundle_name && main_bundle?.offeringName !== bundle.offeringName) {
    return `${bundle.itemCode}_${bundle.offeringName.replace(/[^\w-]/g, "_")}`;
  }
  return bundle.itemCode;
}

function createInfoFor(bundle, index) {
  const bundleKey = bundleDomKey(bundle);
  const isMainCard = bundle.itemCode === main_bundle_name && main_bundle?.offeringName === bundle.offeringName;
  if (isMainCard) {
    return;
  }
  if ($(`.freeUnitEnName_${CSS.escape(bundleKey)}_${index}`)) {
    return;
  }
  const suffix = `_${bundleKey}_${index}`;
  const specimen = $("#infoSpecimen");
  if (!specimen) {
    return;
  }
  const card = specimen.cloneNode(true);
  card.id = `div_${bundleKey}`;
  card.className = "transition";
  card.style.display = "";
  for (const el of card.querySelectorAll("*")) {
    if (el.id && el.id.includes("{packageName}")) {
      el.id = el.id.split("{packageName}").join(suffix);
    }
    for (const cls of Array.from(el.classList)) {
      if (cls.includes("{packageName}")) {
        el.classList.replace(cls, cls.split("{packageName}").join(suffix));
      }
    }
  }
  specimen.before(card);
  const escaped = CSS.escape(bundleKey);
  for (const el of $$(`#div_${escaped}`)) {
    el.style.cursor = "pointer";
    el.setAttribute("itemCode", bundle.itemCode);
    el.setAttribute("domKey", bundleKey);
    el.setAttribute("index", `${index}`);
    el.addEventListener("click", () => toggleMerge(el));
  }
  ForDoms(`.freeUnitEnName_${escaped}_${index}`, (el) => {
    el.style.display = "block";
  });
  ForDoms(`.pbExtraWrapper_${escaped}_${index}`, (el) => {
    el.style.display = "flow-root";
  });
  setText(`.freeUnitEnName_${escaped}_${index}`, bundle.offeringName || bundle.itemCode);
  setText(`.initialTotalAmount_${escaped}_${index}`, `${bundle.initialAmount}`);
  setText(`.measureUnitEnName_${escaped}_${index}`, unitEnIds[bundle.measureUnit]);
  setText(`.usedAmount_${escaped}_${index}`, bundle.usedAmount.toFixed(2));
  setText(`.usagePercentage_${escaped}_${index}`, bundle.usagePercentage);
  setText(`.freeAmount_${escaped}_${index}`, `${bundle.currentAmount}`);
  setText(`.remainingDaysForRenewal_${escaped}_${index}`, `${bundle.remainingDaysForRenewal}d ${msToTime(diffToDaysAhead(bundle.remainingDaysForRenewal + 1))}`);
  setBar(`#progressbar_${escaped}_${index}`, `#progressbarValue_${escaped}_${index}`, `${bundle.usagePercentage}%`);
  const win = bundleWindow(bundle.effectiveTime, bundle.expireTime);
  const dateBar = $(`#progressbarDate_${escaped}_${index}`);
  if (dateBar) {
    dateBar.style.width = `${win.percent.toFixed(2)}%`;
  }
  const dateTip = $(`#progressbarDateValue_${escaped}_${index}`);
  if (dateTip) {
    dateTip.textContent = `${win.percent.toFixed(2)}%`;
    dateTip.style.left = `calc(${win.percent.toFixed(2)}% - 21px)`;
  }
  if (bundle.currentAmount > 0) {
    LogUsage(bundle);
  }
  refreshOverAll();
}

function LogUsage(bundle) {
  const savedLogName = `usageHistory-${serviceNumber}-${bundle.itemCode}`;
  const history = loadHistory(savedLogName);
  const last = history.at(-1);
  if (last?.key !== bundle.usedAmount) {
    if (history.length >= maxHistory) {
      history.shift();
    }
    history.push({ key: bundle.usedAmount, value: dataDate.getTime() });
    saveHistory(savedLogName, history);
  }
}

function LogAndPrintUsage(bundle) {
  LogUsage(bundle);
  PrintUsageHistory(bundle);
}

function RefreshInfo() {
  const list = bundleList();
  const sorted = [...list].sort((a, b) => b.initialAmount - a.initialAmount);
  main_bundle = sorted.find((item) => item.itemCode === main_bundle_name);
  if (main_bundle === undefined) {
    const nameEl = $(".freeUnitEnName");
    if (nameEl) {
      nameEl.replaceChildren();
      const heading = document.createElement("h3");
      heading.textContent = "No Active Internet Bundle";
      nameEl.append(heading);
    }
    const info = $("#info");
    if (info) {
      info.className = "nobundleView";
    }
    setText("#balance", `💰 ${balanceText()}`);
    return;
  }
  normalizeBundle(main_bundle);
  const win = bundleWindow(main_bundle.effectiveTime, main_bundle.expireTime);
  dnew = win.end;
  dold = win.start;
  dpercent = win.percent;
  const remainingDays = main_bundle.remainingDaysForRenewal + 1;
  const remainingLabel = `${remainingDays - 1}d ${msToTime(diffToDaysAhead(remainingDays))}`;
  const daysLeft = (dnew - Date.now()) / 86400000;
  let safeRate = `${main_bundle.currentAmount}`;
  if (daysLeft >= 1) {
    safeRate = (main_bundle.currentAmount / daysLeft).toFixed(2);
  }
  setText(".compAvgUsage", safeRate);
  setBar("#progressbar", "#progressbarValue", `${main_bundle.usagePercentage}%`);
  const dateBar = $("#progressbarDate");
  if (dateBar) {
    dateBar.style.width = `${dpercent}%`;
  }
  const dateTip = $("#progressbarDateValue");
  if (dateTip) {
    dateTip.textContent = `${dpercent.toFixed(2)}%`;
    dateTip.style.left = `calc(${dpercent.toFixed(2)}% - 21px)`;
  }
  const pace = (((0.01 * dpercent) * main_bundle.initialAmount) - main_bundle.usedAmount).toFixed(2);
  setText(".freeUnitEnName", main_bundle.offeringName);
  setText(".freeAmount", `${main_bundle.currentAmount}`);
  setText(".usetimepercentage", pace);
  ForDoms(".usetimepercentage", (el) => {
    el.style.color = Number(pace) < 0 ? "red" : "lightgreen";
  });
  setText(".measureUnitEnName", unitEnIds[main_bundle.measureUnit]);
  setText(".usedAmount", main_bundle.usedAmount.toFixed(2));
  setText(".initialTotalAmount", `${main_bundle.initialAmount}`);
  setText(".usagePercentage", main_bundle.usagePercentage);
  setText(".renewalDate", formatYMD(dnew));
  setText(".subscriptionDate", formatYMD(dold));
  setText(".remainingDaysForRenewal", remainingLabel);
  setText("#balance", `💰 ${balanceText()}`);
  ForDoms(".freeUnitEnName1", (el) => {
    el.style.display = "none";
  });
  ForDoms(".pbExtraWrapper", (el) => {
    el.style.display = "none";
  });
  LogAndPrintUsage(main_bundle);
  if (list.length <= 1) {
    return;
  }
  const visible = list.filter((item) => {
    if (item.currentAmount > 0) {
      return true;
    }
    return !list.some((other) => other.itemCode === item.itemCode && other.currentAmount > 0);
  });
  let extraIndex = 0;
  for (const item of visible) {
    createInfoFor(item, extraIndex);
    extraIndex += 1;
  }
}

//#endregion

//#region history table

function coloredSizeSpan(size, prev) {
  const span = document.createElement("span");
  let good = false;
  if (size < 0) {
    good = true;
  } else if (prev !== undefined && size < prev) {
    good = true;
  }
  span.className = good ? "good-light-green" : "bad-red";
  span.textContent = `${Math.abs(size).toFixed(2)} `;
  const dim = document.createElement("span");
  dim.className = "dim";
  dim.textContent = "GB";
  span.append(dim);
  return span;
}

function PrintUsageHistory(bundle) {
  for (const node of $$(".usageHistoryTable")) {
    node.remove();
  }
  const savedLogName = `usageHistory-${serviceNumber}-${bundle.itemCode}`;
  const table = document.createElement("table");
  table.className = "usageHistoryTable";
  table.style.position = "absolute";
  table.style.top = "10px";
  const body = document.createElement("tbody");
  const headRow = document.createElement("tr");
  const headCell = document.createElement("td");
  headCell.colSpan = 3;
  const toggleBtn = document.createElement("a");
  toggleBtn.id = "show_history_btn";
  toggleBtn.textContent = shouldShowHistory() ? "[ - ]" : "[ + ]";
  toggleBtn.style.cssText = "float: left; cursor:pointer; user-select:none; margin-inline: 5px;";
  toggleBtn.addEventListener("click", toggleShowHistory);
  const clearBtn = document.createElement("a");
  clearBtn.textContent = "[clear]";
  clearBtn.style.cssText = "float: left; cursor:pointer; user-select:none; text-decoration: underline;";
  clearBtn.addEventListener("click", () => {
    if (confirm("Clear History?")) {
      clearHistory(savedLogName);
    }
  });
  const name = document.createElement("span");
  name.style.fontSize = "x-small";
  name.textContent = bundle.offeringName;
  name.addEventListener("click", switchToLandline);
  headCell.append(toggleBtn, clearBtn, name);
  headRow.append(headCell);
  body.append(headRow);
  table.append(body);
  document.body.append(table);
  if (!shouldShowHistory()) {
    table.classList.add("d-none");
  }
  const history = loadHistory(savedLogName);
  let rowIndex = 0;
  for (const entry of history) {
    const row = document.createElement("tr");
    const usedCell = document.createElement("td");
    const prevEntry = rowIndex === 0 ? undefined : history[rowIndex - 1];
    usedCell.append(coloredSizeSpan(entry.key, prevEntry?.key));
    const dateCell = document.createElement("td");
    dateCell.textContent = formatedDate(new Date(entry.value));
    const deltaCell = document.createElement("td");
    if (rowIndex > 0) {
      deltaCell.append(coloredSizeSpan(entry.key - history[rowIndex - 1].key, undefined));
    }
    row.append(usedCell, dateCell, deltaCell);
    body.append(row);
    rowIndex += 1;
  }
}

function shouldShowHistory() {
  return (localStorage.getItem("show_history") ?? "true") === "true";
}

function toggleShowHistory() {
  const table = $(".usageHistoryTable");
  const btn = $("#show_history_btn");
  if (shouldShowHistory()) {
    localStorage.setItem("show_history", "false");
    if (table) {
      table.classList.add("d-none");
    }
    if (btn) {
      btn.textContent = "[ + ]";
    }
  } else {
    localStorage.setItem("show_history", "true");
    if (table) {
      table.classList.remove("d-none");
    }
    if (btn) {
      btn.textContent = "[ - ]";
    }
  }
}

function clearHistory(savedLogName) {
  localStorage.removeItem(savedLogName);
  const body = $(".usageHistoryTable tbody");
  if (!body) {
    return;
  }
  const first = body.firstElementChild;
  body.replaceChildren();
  if (first) {
    body.append(first);
  }
}

//#endregion

// Inline onclick handlers in generated HTML need these on window (userscript sandbox).
window.sendCaptcha = sendCaptcha;
window.toggleMerge = toggleMerge;
window.switchToLandline = switchToLandline;
window.toggleShowHistory = toggleShowHistory;
window.clearHistory = clearHistory;

function toggleMerge(elm) {
  if (!elm.classList.toggle("dim")) {
    RefreshInfo();
    PrintUsageHistory(main_bundle);
    return;
  }
  const key = `${elm.getAttribute("domKey") || elm.getAttribute("itemcode")}_${elm.getAttribute("index")}`;
  const extra = bundleList().find((item) => item.itemCode === elm.getAttribute("itemcode"));
  if (extra) {
    PrintUsageHistory(extra);
  }
  const usedEl = $(".usedAmount");
  const extraUsedEl = $(`.usedAmount_${CSS.escape(key)}`);
  if (usedEl && extraUsedEl) {
    usedEl.textContent = (parseFloat(usedEl.textContent) + parseFloat(extraUsedEl.textContent)).toFixed(2);
  }
  const totalEl = $(".initialTotalAmount");
  const extraTotalEl = $(`.initialTotalAmount_${CSS.escape(key)}`);
  if (totalEl && extraTotalEl) {
    totalEl.textContent = `${parseFloat(totalEl.textContent) + parseFloat(extraTotalEl.textContent)}`;
  }
  const freeEl = $(".freeAmount");
  const extraFreeEl = $(`.freeAmount_${CSS.escape(key)}`);
  if (freeEl && extraFreeEl) {
    freeEl.textContent = `${Number((parseFloat(freeEl.textContent) + parseFloat(extraFreeEl.textContent)).toFixed(2))}`;
  }
  const mergedUsedEl = $(`.usedAmount_${CSS.escape(key)}`);
  const mergedFreeEl = $(`.freeAmount_${CSS.escape(key)}`);
  const mergedTotalEl = $(`.initialTotalAmount_${CSS.escape(key)}`);
  if (!mergedUsedEl || !mergedFreeEl || !mergedTotalEl) {
    return;
  }
  const mergedUsed = main_bundle.usedAmount + parseFloat(mergedUsedEl.textContent);
  const mergedFree = main_bundle.currentAmount + parseFloat(mergedFreeEl.textContent);
  const mergedTotal = main_bundle.initialAmount + parseFloat(mergedTotalEl.textContent);
  const mergedPct = Number(((mergedUsed / mergedTotal) * 100).toFixed(2));
  setText(".compAvgUsage", (mergedFree / ((dnew - Date.now()) / 86400000)).toFixed(2));
  setText(".usetimepercentage", (((0.01 * dpercent) * mergedTotal) - mergedUsed).toFixed(2));
  setBar("#progressbar", "#progressbarValue", `${mergedPct}%`);
}

function drawDifferenceFromLastLoad() {
  for (const node of $$(".drawedDiff")) {
    node.remove();
  }
  const list = [...bundleList()].sort((a, b) => b.effectiveTime - a.effectiveTime);
  if (list.length === 0) {
    return;
  }
  const prefix = `usageHistory-${serviceNumber}-`;
  const snapshots = [];
  for (let i = 0; i < localStorage.length; i++) {
    const storageKey = localStorage.key(i);
    if (!storageKey || !storageKey.startsWith(prefix)) {
      continue;
    }
    const entries = safeParse(localStorage.getItem(storageKey), null);
    if (!Array.isArray(entries) || entries.length < 2) {
      continue;
    }
    const bundle = list.find((item) => item.itemCode === storageKey.slice(prefix.length));
    if (!bundle) {
      continue;
    }
    snapshots.push({ bundle, prev: entries.at(-2) });
  }
  if (snapshots.length === 0) {
    return;
  }
  const latest = Math.max(...snapshots.map((item) => item.prev.value));
  for (const snapshot of snapshots.filter((item) => item.prev.value === latest)) {
    const { bundle, prev } = snapshot;
    if (!bundle.usagePercentage) {
      continue;
    }
    const width = ((bundle.usedAmount - prev.key) / bundle.initialAmount) * 100;
    let target = null;
    if (bundle.itemCode === main_bundle_name) {
      target = $("#progressbar");
    } else {
      target = $(`[id*="${CSS.escape(bundle.itemCode)}"] .progressbar`);
    }
    if (!target) {
      continue;
    }
    const ratio = (width / Number(bundle.usagePercentage)) * 100;
    const overlay = document.createElement("div");
    overlay.className = "progressbar drawedDiff";
    const capped = ratio > 100 ? 100 : ratio;
    overlay.style.cssText = `width: ${capped}%; background-color: rgb(220 30 255 / 56%); right: 0; display: inline;`;
    overlay.textContent = " ";
    target.append(overlay);
  }
}

async function Main() {
  dataDate = new Date();
  const stamp = $("#lastRefresh");
  if (stamp) {
    stamp.textContent = `✍️ ${formatedDate(dataDate)}`;
  }
  loginObj = safeParse(localStorage.getItem(`${serviceNumber}_loginObj`), undefined);
  usageObj = undefined;
  balanceObj = undefined;
  appVersionNo = await getLatestAppVersionNumber();
  if (!(await isLoggedIn())) {
    try {
      await RefreshAppToken();
    } catch (ex) {
      console.error(ex);
    }
  }
  if (!(await isLoggedIn())) {
    const loginRes = await Login();
    if (loginRes.includes('"retCode":"0"')) {
      localStorage.setItem(`${serviceNumber}_loginObj`, loginRes);
      loginObj = safeParse(loginRes, undefined);
    } else {
      const errBox = $("#error");
      if (errBox) {
        errBox.textContent = "Error login!!";
      }
    }
  }
  const quota = await fetchQuota(loginObj.body.subscriber.subscriberId, loginObj.body.account.acctId);
  usageObj = quota.usage;
  balanceObj = quota.balance;
  RefreshInfo();
  drawDifferenceFromLastLoad();
}
Main();

async function getAssociatedLines() {
  return postAPI("/besapp/base/rest/busiservice/v1/account/getAssociatedLines", {
    subscriberId: loginObj.body.subscriber.subscriberId,
    serviceNumber: loginObj.body.loginId
  });
}

async function querySubscribers(subscriberId) {
  return postAPI("/besapp/base/rest/busiservice/cz/v1/customer/querySubscribers", { subscriberId, pageSize: 10, startNum: 0 });
}

async function switchAccount(servNumber) {
  return postAPI("/besapp/base/rest/busiservice/v1/account/switchAccount", {
    subsId: loginObj.body.subscriber.subscriberId,
    servNumber,
    channel: "702"
  });
}

async function switchToLandline() {
  if (main_bundle_name === LANDLINE_CODE) {
    location.reload();
    return;
  }
  main_bundle_name = LANDLINE_CODE;
  dataDate = new Date();
  const stamp = $("#lastRefresh");
  if (stamp) {
    stamp.textContent = `✍️ ${formatedDate(dataDate)}`;
  }
  usageObj = undefined;
  balanceObj = undefined;
  const associatedLines = await getAssociatedLines();
  const associatedLinesObj = safeParse(associatedLines, {});
  const subscriberId = associatedLinesObj.body.AssociatedNumbers.find((item) => String(item.networkType) === "4").subscriberId;
  const subscribers = await querySubscribers(subscriberId);
  const querySubscribersObj = safeParse(subscribers, {});
  const subscriber = querySubscribersObj.body.subscriberList.find((item) => item.subscriberId === subscriberId);
  const switchRes = await switchAccount(subscriber.servNumber);
  loginObj.body.token = safeParse(switchRes, {}).body.token;
  const landQuota = await fetchQuota(subscriberId, subscriber.accountId);
  usageObj = landQuota.usage;
  balanceObj = landQuota.balance;
  // Drop internet package cards so only landline bundles render.
  for (const node of $$('#info > div[id^="div_"]')) {
    node.remove();
  }
  for (const node of $$(".auto-tip")) {
    node.remove();
  }
  const overAll = $("#overAll");
  if (overAll) {
    overAll.style.display = "none";
  }
  $("#info")?.classList.remove("nobundleView");
  RefreshInfo();
  drawDifferenceFromLastLoad();
}
