# WEUI

Better `WE.eg` user interface. Replaces slow `My WE` page with dark dashboard for quota, expiry, daily safe rate, balance, history.

Source: `WEUI.user.js`. Android WebView build: `we.js`. Builder: `index.js`.

## Files

- `WEUI.user.js` — Tampermonkey userscript, desktop/main version.
- `we.js` — generated Android variant. Do not edit directly.
- `index.js` — converter `WEUI.user.js` -> `we.js`.
- `package.json` — `npm start` / `node index.js`.
- `README.md` — this file.

## Flow

Script runs on `WEUIInternet` page, calls `window.stop()`, rewrites DOM.

`Main()`:
1. `getLatestAppVersionNumber()`
2. `isLoggedIn()` via `GetUserRoleCz()`, else `RefreshAppToken()`, else `Login()`
3. `fetchQuota(subscriberId, acctId)` -> `GetUsage` + `GetBalance` + normalize
4. `RefreshInfo()` + `drawDifferenceFromLastLoad()`

API host:

```js
host = "we-auth.mostafab2010.workers.dev"
service_url = `https://${host}/echannel/service`
```

Main bundle: `C_TED_Primary_Fixed_Data`. Landline: `C_FV_Normal_VoiceI` via `switchToLandline()`.

## API layer

Single helper:

```js
postAPI(path, body)
```

All calls go through `postAPI`, except `Login()` captcha flow (defers `.send()` until user input) and version fetch (`fetch`, public endpoint).

Shared fetch:

```js
fetchQuota(subscriberId, acctId)
```

Used by both `Main()` and `switchToLandline()`. No duplicated quota blocks.

Safe JSON:

```js
safeParse(text, fallback)
```

Guards `localStorage`, login, token, quota parses.

Auth headers shared:

```js
parseAuthCookies()
saveAuthHeaders(responseText)
```

## UI

- Remaining quota + days: `.freeAmount`, `.remainingDaysForRenewal`
- Safe daily rate: `.compAvgUsage`, `.usetimepercentage` (red over pace, green under)
- Usage bar + time bar: `#progressbar`, `#progressbarDate`
- Extra bundles: `createInfoFor(package, index)`, click merge/dim via `toggleMerge()`
- Overall quota: `refreshOverAll()`
- Balance EGP: `#balance` from `balanceInfo[0].totalAmount / 10000`
- History per bundle: `usageHistory-${serviceNumber}-${itemCode}`
  - `loadHistory()`, `saveHistory()`, `LogUsage()`, `PrintUsageHistory()`
  - `toggleShowHistory()`, `clearHistory()`
  - green = usage decreased, red = increased
- Session diff overlay: `drawDifferenceFromLastLoad()`, magenta bar
- Captcha: `getCaptchaToken()` -> `https://captcha.te.eg/api/Captcha/GenerateCaptcha`, overlay `.captcha`, submit via `sendCaptcha()`
- Mobile detect: clears background image, `maxHistory = maxHistoryMobile`

## Config

Top of userscript:

```js
let maxHistory = 35;
const maxHistoryMobile = 4;
```

## Desktop use (Tampermonkey)

1. Install Tampermonkey.
2. New script, paste `WEUI.user.js`.
3. Open with credentials in URL:

```
https://we-auth.mostafab2010.workers.dev/echannel/service/WEUIInternet?serviceNumber=XXXXXXXX&password=YYYYYYYY
```

Script reads:

```js
//__CREDENTIALS:QUERY__
let serviceNumber = new URLSearchParams(window.location.search).get("serviceNumber");
let password = new URLSearchParams(window.location.search).get("password");
//__END_CREDENTIALS__
```

Header match:

```
// @match https://we-auth.mostafab2010.workers.dev/echannel/service/WEUIInternet?*
```

## Android use (`we.js`)

Same logic, credentials via `localStorage` + `prompt` first run:

```js
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
```

Header match:

```
// @match https://app-my.te.eg/echannel/service/WEUIInternet?*
```

## Build `we.js`

```bash
node index.js
node index.js path/to/we.js
npm start
```

`index.js` replaces marker block `__CREDENTIALS:QUERY__` -> `__CREDENTIALS:STORAGE__`, swaps `@match` to `app-my.te.eg`, normalizes EOL to LF. Never edit `we.js` directly. Edit `WEUI.user.js`, rebuild.

`we.js` diff vs `WEUI.user.js` stays minimal: `@match` + credential block only.

## Storage keys

- `serviceNumber`, `password` — only `we.js`
- `${serviceNumber}_deviceid` — random 16-hex
- `${serviceNumber}_headers` — `csrftoken`, `indiv_login_token`, `refresh_token`
- `${serviceNumber}_loginObj` — login response
- `usageHistory-${serviceNumber}-${itemCode}` — array `{key: usedAmount, value: timestamp}`
- `show_history` — `true`/`false`

## Notes

- `window.onerror` writes to `#error` + `console.error`, no `alert`.
- Raw API dumps in `#rawUsageResponse`, `#rawBalanceResponse` below viewport (`margin-top: 100vh`).
- Version `2026-09-29.0`, namespace `https://github.com/mostafaz4/WEUI/`.
