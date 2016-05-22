//block the original ui.js and lobby.js because we are replacing it with our own
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: true};
    },
    {urls: ["*://keldon.net/hanabi/ui.js", "*://keldon.net/hanabi/lobby.js"]},
    ["blocking"]);

chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
        if(request.action = "open-options") {
            chrome.runtime.openOptionsPage();
        }
    }
)