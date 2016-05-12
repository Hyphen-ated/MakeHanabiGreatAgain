//block the original ui.js and lobby.js because we are replacing it with our own
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: true};
    },
    {urls: ["*://keldon.net/hanabi/ui.js", "*://keldon.net/hanabi/lobby.js"]},
    ["blocking"]);