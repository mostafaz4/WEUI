// ==UserScript==
// @name         WEUI
// @version      2024-12-07.0
// @namespace    https://github.com/mostafaz4/WEUI/
// @updateURL    https://github.com/mostafaz4/WEUI/raw/refs/heads/main/WEUI.user.js
// @description  Better WE.eg user interface
// @author       Bondok
// @match        https://app-my.te.eg/echannel/service/besapp/base/rest/busiservice/v1?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

// prevent original page loading
window.stop();

//#region parameters

maxHistory = 35;
maxHistoryMobile = 4;

//#endregion

//#region write page html
(function(){
    document.write(`








<title>WE Consumption details</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
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
</style>

<div id="error"></div>
<div id="rawUsageResponse" class="raw" style="margin-top: 100vh;"></div>
<div id="rawBalanceResponse" class="raw"></div>
<div id="info">
  <h3 align="center"><span class="freeUnitEnName"></span></h3>
  <h4>Rem: <span class="freeAmount"></span> <span class="measureUnitEnName"></span> for <span class="remainingDaysForRenewal"></span></h4>
  <h4>Rate: <span class="compAvgUsage"></span> <span class="measureUnitEnName"></span>/day, <span class="usetimepercentage"></span> <span class="measureUnitEnName"></span> safe.</h4>

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
    <h4 class="pbExtraWrapper_overAll" style="display: none; margin-bottom: 0px;">
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

  <!--<button class="buttonRefresh" onclick="SmartGetUsage(serviceNumber);">Refresh</button>-->
  <span style="position: absolute; float: right; left: 100%; font-size: 10px; width: fit-content; color: gray; margin: 27px -190px; pointer-events: none;" id="lastRefresh"></span>
  <span style="position: absolute; font-size: 10px; color: gray; margin: 25px 25px; pointer-events: none;" id="balance"></span>
</div>





`)
}())
//#endregion

// capture exceptions to be displayed on phones by alerts
window.onerror = function (error, url, line) { alert(line + ": " + error); };

serviceNumber = new URLSearchParams(window.location.search).get("serviceNumber")
password = new URLSearchParams(window.location.search).get("password");
generatedToken = "";
loginToken = "";
log = false;
lastLoginTime = new Date(0)
deviceid = generateRandomHexString(16)
cachedLocalStorage = {...localStorage}

var loginObj, usageObj, balanceObj;

function localStorage_setItem (key, string) { localStorage.setItem(key, string); cachedLocalStorage[key] = string; }
function consoleLog(obj) { if (!log) return; console.log(obj); }
function generateRandomHexString(length){ return [...Array(length)].map(() => Math.floor(Math.random() * 16).toString(16)).join('') }

function prepare_xhr(xhr) {
    xhr.withCredentials = true;
    xhr.setRequestHeader('accept', "application/json, text/plain, */*")
    xhr.setRequestHeader('csrftoken', loginObj?.body?.token ?? "")
    xhr.setRequestHeader('languagecode', "en-US")
    xhr.setRequestHeader('ismobile', "true")
    xhr.setRequestHeader('iscoporate', "false")
    xhr.setRequestHeader('isselfcare', "true")
    xhr.setRequestHeader('channelid', "704")
    xhr.setRequestHeader('delegatorsubsid', "")
    xhr.setRequestHeader('deviceid', deviceid)
    xhr.setRequestHeader('Content-Type', "application/json")
    xhr.setRequestHeader('Accept-Encoding', "gzip")
    xhr.setRequestHeader('User-Agent', "okhttp/3.12.12")
    xhr.setRequestHeader('clienttype', "google")
    xhr.setRequestHeader('appversionno', "102")
}

function Login() {
    lastLoginTime = new Date();
    xhr_login = new XMLHttpRequest();
    xhr_login.open('POST', 'https://app-my.te.eg/echannel/service/besapp/base/rest/busiservice/v1/auth/userAuthenticate');
    prepare_xhr(xhr_login)

    xhr_login.send(`{"acctId":"FBB${serviceNumber.replace(/^0+/, '')}","password":"${password}","appLocale":"en-US","isSelfcare":"Y","isMobile":"Y"}`);

    xhr_login.onload = function () {
        if (xhr_login.response.includes('"retCode":"0"')) {
            loginObj = JSON.parse(xhr_login.response);
            consoleLog(loginObj);
            GetUsage();
        } else {
            console.log(xhr_login.response);
            document.getElementById("error").innerHTML = "Error login!!";
            consoleLog("Error loggining in!!");
        }
    };
}

function GetUsage() {
    xhr_usage = new XMLHttpRequest();
    xhr_usage.open('POST', 'https://app-my.te.eg/echannel/service/besapp/base/rest/busiservice/cz/cbs/bb/queryFreeUnit');
    prepare_xhr(xhr_usage)

    xhr_usage.send(`{"subscriberId":"${loginObj.body.subscriber.subscriberId}"}`);

    xhr_usage.onload = function () {
        //console.log("GetUsage json: " + xhr_usage.response);
        document.getElementById("rawUsageResponse").innerHTML = "<PRE>" + JSON.stringify(JSON.parse(xhr_usage.response), null, 4) + "</PRE>";
        usageObj = JSON.parse(xhr_usage.response);
        consoleLog(usageObj);
        //console.log(JSON.stringify(xhr_usage.response));
        GetBalance();

        RefreshInfo();
    };
}

function GetBalance() {
    xhr_balance = new XMLHttpRequest();
    xhr_balance.open('POST', 'https://app-my.te.eg/echannel/service/besapp/base/rest/busiservice/cbs/ar/queryBalance');
    prepare_xhr(xhr_balance)

    xhr_balance.send(`{"acctId":"${loginObj.body.account.acctId}"}`);

    xhr_balance.onload = function () {
        //console.log("GetBalance json: " + xhr_balance.response);
        document.getElementById("rawBalanceResponse").innerHTML = "<PRE>" + JSON.stringify(JSON.parse(xhr_balance.response), null, 4) + "</PRE>";
        balanceObj = JSON.parse(xhr_balance.response);
        consoleLog(usageObj);
        //console.log(JSON.stringify(xhr_balance.response));

        RefreshInfo();
    };
}





function formatedDate(){
    const now = new Date();
    const time = now.toLocaleString('en-eg', { hour: "2-digit", minute: "2-digit", hour12: true })
    const date = now.toLocaleString('en-uk', { day: "2-digit", month: "short" })
    return `${date} — ${time}`;
};

function SmartGetUsage() {
    nowFormatedDateTime = formatedDate()
    window.lastRefresh.innerText = "Generated: " + nowFormatedDateTime;

    usageObj, balanceObj = undefined;

    //if (((new Date - lastLoginTime) / 1000 / 60) > 15)
    Login();
}

function msToTime(duration, leading_zero = false) {
    let minutes = Math.floor((duration / (1000 * 60)) % 60)
    let hours   = Math.floor((duration / (1000 * 60 * 60)) % 24);
    if (leading_zero) {
        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
    }
    return `${hours}h ${minutes}m`;
}

function ForDoms(selector, action) {
    Array.from(document.querySelectorAll(selector)).forEach(action);
}

function refreshOverAll() {
    document.getElementById("overAll").style.display = "block";
    sumInitial = 0;
    sumUsed = 0;
    usageObj.body[0].freeUnitBeanDetailList.forEach(x => {
        sumInitial += x.initialAmount;
        sumUsed += x.usedAmount
    });
    sumUsagePercentage = ((sumUsed / sumInitial) * 100).toFixed(2)

    ForDoms(".freeUnitEnName_overAll", el => { el.style.display = "block"; });
    ForDoms(".pbExtraWrapper_overAll", el => { el.style.display = "flow-root"; });

    ForDoms(".initialTotalAmount_overAll", el => { el.innerText = sumInitial; });
    ForDoms(".measureUnitEnName_overAll", el => { el.innerText = unitEnIds[C_TED_Primary_Fixed_Data.measureUnit]; });
    ForDoms(".usedAmount_overAll", el => { el.innerText = sumUsed.toFixed(2); });
    ForDoms(".freeAmount_overAll", el => { el.innerText = (sumInitial - sumUsed.toFixed(2)).toFixed(2); });
    ForDoms(".usagePercentage_overAll", el => { el.innerText = sumUsagePercentage; });

    document.getElementById("progressbar_overAll").style.width = sumUsagePercentage + "%";
    document.getElementById("progressbarValue_overAll").innerText = sumUsagePercentage + "%";
    document.getElementById("progressbarValue_overAll").style.left = "calc(" + sumUsagePercentage + "% - 21px)";

    usageObj.body[0].freeUnitBeanDetailList.forEach(x => {

        dnewInfo = new Date(new Date(x.expireTime).toLocaleString("en-CA", {day:"2-digit",month:"2-digit",year:"numeric"}) + " 0:0:0").getTime();
        doldInfo = new Date(new Date(x.effectiveTime).toLocaleString("en-CA", {day:"2-digit",month:"2-digit",year:"numeric"}) + " 0:0:0").getTime();
        dnowInfo = new Date().getTime();
        dpercentInfo = (dnowInfo - doldInfo) / (dnewInfo - doldInfo) * 100;

        document.querySelector(".pbExtraWrapper_overAll > div").appendChild(Object.assign(document.createElement('span'),{
            innerHTML: `${dpercentInfo.toFixed(2)}%`,
            style: `left: calc(${dpercentInfo.toFixed(2)}% - 21px);`,
            className: "tip"
        }));

        document.querySelector(".pbExtraWrapper_overAll > div").appendChild(Object.assign(document.createElement('div'),{
            innerHTML: `&nbsp;`,
            style: `width: ${dpercentInfo.toFixed(2)}%; background-color: rgb(163 204 85 / 25%); position: absolute; transition: 0.5s; float: left; height: 3px; margin-top: 37px;`
        }));

    });
}

unitEnIds = {1106: "B", 1107: "KB", 1108: "MB", 1109: "GB"}

function createInfoFor(package, index) {
    if (package.itemCode == "C_TED_Primary_Fixed_Data" || document.getElementsByClassName("freeUnitEnName_" + package.itemCode + "_" + index).length > 0) return;

    package.usedAmount = package.initialAmount - package.currentAmount
    package.usagePercentage = ((package.usedAmount / package.initialAmount)*100).toFixed()

    sampleHTML = document.getElementById("infoSpecimen").innerHTML;
    sampleHTML = sampleHTML.replace(/{packageName}/g, "_" + package.itemCode + "_" + index);
    nwInfo = document.createElement("div");
    nwInfo.id = "div_" + package.itemCode;
    nwInfo.className = "transition";
    nwInfo.innerHTML = sampleHTML;
    document.getElementById("infoSpecimen").parentNode.insertBefore(nwInfo, document.getElementById("infoSpecimen"));

    ForDoms("#div_" + package.itemCode, el => { el.style.cursor = "pointer"; el.setAttribute("onclick", "toggleMerge(this)"); el.setAttribute("itemCode", package.itemCode); el.setAttribute("index", index); });

    ForDoms(".freeUnitEnName_" + package.itemCode + "_" + index, el => { el.style.display = "block"; });
    ForDoms(".pbExtraWrapper_" + package.itemCode + "_" + index, el => { el.style.display = "flow-root"; });

    ForDoms(".freeUnitEnName_" + package.itemCode + "_" + index, el => { el.innerText = package.offeringName || package.itemCode; });
    ForDoms(".initialTotalAmount_" + package.itemCode + "_" + index, el => { el.innerText = package.initialAmount; });
    ForDoms(".measureUnitEnName_" + package.itemCode + "_" + index, el => { el.innerText = unitEnIds[package.measureUnit]; });
    ForDoms(".usedAmount_" + package.itemCode + "_" + index, el => { el.innerText = package.usedAmount.toFixed(2); });
    ForDoms(".usagePercentage_" + package.itemCode + "_" + index, el => { el.innerText = package.usagePercentage; });
    ForDoms(".freeAmount_" + package.itemCode + "_" + index, el => { el.innerText = package.currentAmount; });
    ForDoms(".remainingDaysForRenewal_" + package.itemCode + "_" + index, el => { el.innerText =
        package.remainingDaysForRenewal + "d " + msToTime(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + package.remainingDaysForRenewal + 1, 0, 0, 0) - new Date());
                                                                                });

    document.getElementById("progressbar_" + package.itemCode + "_" + index).style.width = package.usagePercentage + "%";
    document.getElementById("progressbarValue_" + package.itemCode + "_" + index).innerText = package.usagePercentage + "%";
    document.getElementById("progressbarValue_" + package.itemCode + "_" + index).style.left = "calc(" + package.usagePercentage + "% - 21px)";

    dnewInfo = new Date(new Date(package.expireTime).toLocaleString("en-CA", {day:"2-digit",month:"2-digit",year:"numeric"}) + " 0:0:0").getTime();
    doldInfo = new Date(new Date(package.effectiveTime).toLocaleString("en-CA", {day:"2-digit",month:"2-digit",year:"numeric"}) + " 0:0:0").getTime();
    dnowInfo = new Date().getTime();
    dpercentInfo = (dnowInfo - doldInfo) / (dnewInfo - doldInfo) * 100;

    document.getElementById("progressbarDate_" + package.itemCode + "_" + index).style.width = dpercentInfo + "%";
    document.getElementById("progressbarDateValue_" + package.itemCode + "_" + index).innerText = dpercentInfo.toFixed(2) + "%";
    document.getElementById("progressbarDateValue_" + package.itemCode + "_" + index).style.left = "calc(" + dpercentInfo.toFixed(2) + "% - 21px)";

    LogUsage(package)
    refreshOverAll()
}

function LogUsage(package, print){

    let savedLogName = `usageHistory-${serviceNumber}-${package.itemCode}`
    if (cachedLocalStorage[savedLogName] === undefined) localStorage_setItem(savedLogName, JSON.stringify([]));

    var history = JSON.parse(cachedLocalStorage[savedLogName]);
    if (history == null) return

    if (history.length > 0){
        if (history[history.length - 1].key != package.usedAmount) {
            if (history.length >= maxHistory && history.length > 0)
                history.shift();
        } else {
            return
        }
    }

    history.push({ key: package.usedAmount, value: nowFormatedDateTime })
    localStorage_setItem(savedLogName, JSON.stringify(history));

    if (!print) return
    PrintUsageHistory(package)
}

function RefreshInfo() {

    C_TED_Primary_Fixed_Data = usageObj.body[0].freeUnitBeanDetailList.find(x => x.itemCode == "C_TED_Primary_Fixed_Data")
    // repopulating old api properties for easier migration
    C_TED_Primary_Fixed_Data.usedAmount = C_TED_Primary_Fixed_Data.initialAmount - C_TED_Primary_Fixed_Data.currentAmount
    C_TED_Primary_Fixed_Data.usagePercentage = ((C_TED_Primary_Fixed_Data.usedAmount / C_TED_Primary_Fixed_Data.initialAmount) * 100).toFixed()

    if (C_TED_Primary_Fixed_Data == undefined) {
        ForDoms(".freeUnitEnName", el => { el.innerHTML = "<h3>No Active Internet Bundle</h3>"; document.querySelector("#info").className = "nobundleView"; });
        ForDoms("#balance", el => { el.innerText = "💰 " + (balanceObj == undefined ? "loading..." : (balanceObj.body.balanceInfo[0].totalAmount / 10000).toFixed(2)) + " EGP" });
        return;
    }

    dnew = new Date(new Date(C_TED_Primary_Fixed_Data.expireTime).toLocaleString("en-CA", { day: "2-digit", month: "2-digit", year: "numeric" }) + " 0:0:0").getTime();
    dold = new Date(new Date(C_TED_Primary_Fixed_Data.effectiveTime).toLocaleString("en-CA", { day: "2-digit", month: "2-digit", year: "numeric" }) + " 0:0:0").getTime();
    dnow = new Date().getTime();
    dpercent = (dnow - dold) / (dnew - dold) * 100;

    remGB = C_TED_Primary_Fixed_Data.currentAmount;
    remDays = C_TED_Primary_Fixed_Data.remainingDaysForRenewal + 1;
    remDaysFrac = (remDays - 1) + "d " + msToTime(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + remDays, 0, 0, 0) - new Date());
    compAvgUsage = (remGB / ((dnew - new Date()) / (1000 * 60 * 60 * 24))).toFixed(2);
    if ((dnew - new Date()) / (1000 * 60 * 60 * 24) < 1) compAvgUsage = remGB;
    ForDoms(".compAvgUsage", el => { el.innerText = compAvgUsage; });

    document.getElementById("progressbar").style.width = C_TED_Primary_Fixed_Data.usagePercentage + "%";
    document.getElementById("progressbarValue").innerText = C_TED_Primary_Fixed_Data.usagePercentage + "%";
    document.getElementById("progressbarValue").style.left = "calc(" + C_TED_Primary_Fixed_Data.usagePercentage + "% - 21px)";
    document.getElementById("progressbarDate").style.width = dpercent + "%";
    document.getElementById("progressbarDateValue").innerText = dpercent.toFixed(2) + "%";
    document.getElementById("progressbarDateValue").style.left = "calc(" + dpercent.toFixed(2) + "% - 21px)";
    //document.getElementById("datePercentage").innerText = dpercent.toFixed(2);

    oldusetimeperc = (dpercent - C_TED_Primary_Fixed_Data.usagePercentage).toFixed(2);
    usetimeperc = (((0.01 * dpercent) * C_TED_Primary_Fixed_Data.initialAmount) - C_TED_Primary_Fixed_Data.usedAmount).toFixed(2);

    ForDoms(".freeUnitEnName", el => { el.innerText = C_TED_Primary_Fixed_Data.offeringName; });
    ForDoms(".freeAmount", el => { el.innerText = C_TED_Primary_Fixed_Data.currentAmount; });
    ForDoms(".usetimepercentage", el => { el.innerText = usetimeperc; if (usetimeperc < 0) el.style.color = "red"; else el.style.color = "lightgreen"; });
    ForDoms(".measureUnitEnName", el => { el.innerText = unitEnIds[C_TED_Primary_Fixed_Data.measureUnit]; });
    ForDoms(".usedAmount", el => { el.innerText = C_TED_Primary_Fixed_Data.usedAmount.toFixed(2); });
    ForDoms(".initialTotalAmount", el => { el.innerText = C_TED_Primary_Fixed_Data.initialAmount; });
    ForDoms(".usagePercentage", el => { el.innerText = C_TED_Primary_Fixed_Data.usagePercentage; });
    ForDoms(".renewalDate", el => { el.innerText = new Date(dnew).getFullYear() + "-" + (new Date(dnew).getMonth() + 1) + "-" + new Date(dnew).getDate(); });
    ForDoms(".subscriptionDate", el => { el.innerText = new Date(dold).getFullYear() + "-" + (new Date(dold).getMonth() + 1) + "-" + new Date(dold).getDate(); }); //C_TED_Primary_Fixed_Data.subscriptionDate;
    ForDoms(".remainingDaysForRenewal", el => { el.innerText = remDaysFrac; });
    ForDoms("#balance", el => { el.innerText = "💰 " + (balanceObj == undefined ? "loading..." : (balanceObj.body.balanceInfo[0].totalAmount / 10000).toFixed(2)) + " EGP" });

    ForDoms(".freeUnitEnName1", el => { el.style.display = "none"; });
    ForDoms(".pbExtraWrapper", el => { el.style.display = "none"; });

    // add to existing localStorage usageHistory
    if (typeof C_TED_Primary_Fixed_Data != "undefined")
        LogUsage(C_TED_Primary_Fixed_Data, true)

    if (usageObj.body[0].freeUnitBeanDetailList.length <= 1) return;

    usageObj.body[0].freeUnitBeanDetailList.forEach((x, index) => createInfoFor(x, index));

    PrintUsageHistory(C_TED_Primary_Fixed_Data)
}


isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { document.body.style.background = 0; isMobile = true; }
if (isMobile) maxHistory = maxHistoryMobile;

function PrintUsageHistory(package){
    console.log(`Printing usage history for ${package.itemCode}`)
    let savedLogName = `usageHistory-${serviceNumber}-${package.itemCode}`
    document.querySelectorAll(".usageHistoryTable").forEach(child => child.parentNode.removeChild(child))
    document.body.appendChild(Object.assign(document.createElement('table'),{
        innerHTML:
        `<tr><td colspan="3"><span style="font-size: x-small;">${package.offeringName}</span><a onclick="localStorage.removeItem('${savedLogName}');usageHistoryItemDoms.innerHTML=\'\';" style="float: left; cursor:pointer; text-decoration: underline;">[clear]</a></td></tr>`,
        style: "position: absolute; top: 10px;",
        className: "usageHistoryTable"
    }));
    if (cachedLocalStorage[savedLogName] === undefined) {localStorage_setItem(savedLogName, JSON.stringify([])); }
    for (let [index, usageDom] of JSON.parse(cachedLocalStorage[savedLogName]).entries()) {
        let usageNumDom = "";
        if (index > 0){
            let usageNum = usageDom.key - JSON.parse(cachedLocalStorage[savedLogName])[index - 1].key;
            usageNumDom = usageNum.toFixed(2) + " GB";
            if (usageNum < 0) { usageNumDom = "<span style=\"color: lightgreen;\">" + Math.abs(usageNum).toFixed(2) + " GB</span>"; }
        }
        document.querySelector(".usageHistoryTable").appendChild(Object.assign(document.createElement('tr'),{
            innerHTML: `<td>${usageDom.value}</td><td>${usageNumDom}</td>`
        }));
    }
}

SmartGetUsage(serviceNumber);

toggleMerge = function (elm) {
    if (!elm.classList.toggle("dim")) { RefreshInfo(); PrintUsageHistory(C_TED_Primary_Fixed_Data); return; }

    let itemcode = elm.getAttribute("itemcode") + "_" + elm.getAttribute("index");
    PrintUsageHistory(usageObj.body[0].freeUnitBeanDetailList.find(x => x.itemCode == elm.getAttribute("itemcode")))
    document.querySelector(".usedAmount").innerHTML = (parseFloat(document.querySelector(".usedAmount").innerText) + parseFloat(document.querySelector(".usedAmount_" + itemcode).innerText)).toFixed(2);
    document.querySelector(".initialTotalAmount").innerHTML = parseFloat(document.querySelector(".initialTotalAmount").innerText) + parseFloat(document.querySelector(".initialTotalAmount_" + itemcode).innerText);
    document.querySelector(".freeAmount").innerHTML = Number((parseFloat(document.querySelector(".freeAmount").innerText) + parseFloat(document.querySelector(".freeAmount_" + itemcode).innerText)).toFixed(2));
    let mergedUsedAmount = parseFloat(C_TED_Primary_Fixed_Data.usedAmount + parseFloat(document.querySelector(".usedAmount_" + itemcode).innerText));
    let mergedFreeAmount = parseFloat(C_TED_Primary_Fixed_Data.currentAmount + parseFloat(document.querySelector(".freeAmount_" + itemcode).innerText));
    let mergedInitialTotalAmount = parseFloat(C_TED_Primary_Fixed_Data.initialAmount + parseFloat(document.querySelector(".initialTotalAmount_" + itemcode).innerText));
    let mergedUsagePercentage = Number((( mergedUsedAmount / mergedInitialTotalAmount ) * 100).toFixed(2));

    document.querySelector(".compAvgUsage").innerText = (mergedFreeAmount / ((dnew-new Date())/(1000*60*60*24))).toFixed(2);
    document.querySelector(".usetimepercentage").innerText = (((0.01 * dpercent) * mergedInitialTotalAmount) - mergedUsedAmount).toFixed(2);

    document.querySelector("#progressbar").style.width = mergedUsagePercentage + "%";
    document.querySelector("#progressbarValue").innerText = mergedUsagePercentage + "%";
    document.querySelector("#progressbarValue").style.left = "calc(" + mergedUsagePercentage + "% - 21px)";
}