

chrome.runtime.onInstalled.addListener(function (tab) {
    // https://developer.chrome.com/docs/extensions/reference/webRequest/#event-onBeforeSendHeaders
  chrome.webRequest.onBeforeSendHeaders.addListener(
    onBeforeSendHeaders_callback,
    { urls: ["*://*/*?*"] },
    [/*"blocking", */ "requestHeaders"]
  );
  // https://developer.chrome.com/docs/extensions/reference/webRequest/#event-onBeforeRequest
  chrome.webRequest.onBeforeRequest.addListener(
    onBeforeRequest_callback,
    { urls: ["*://*/*?*"] },
    [/*"blocking", */ "requestBody"]
  );
});

function onBeforeSendHeaders_callback(e) {
    console.log(e.url);
    console.log("request headers:");
    console.log(e.requestHeaders);
    console.log("");
    console.log("");
  }
  

function onBeforeRequest_callback(e) {
    console.log(e.url);
    console.log("request body:");
    console.log(e.requestBody);
    console.log("");
    console.log("");
  }
  