//block the original ui.js and lobby.js because we are replacing it with our own
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: true};
    },
    {urls: ["*://keldon.net/hanabi/ui.js", "*://keldon.net/hanabi/lobby.js", "*://keldon.net/hanabi/hanabi.css"]},
    ["blocking"]);

var next_time_sound_playable = 0;
chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
        if(request.action == "open-options") {
            chrome.runtime.openOptionsPage();
        } else if (request.action == "play-sound") {
            //if we're currently already playing a sound, we don't want to overlap with this new one. so keep track of
            //when it's safe to start a new sound, and delay it until that time
            var now = Date.now();
            var delay = 0;
            if (now < next_time_sound_playable) {
                delay = next_time_sound_playable - now;
            }
            next_time_sound_playable = now + 2000;
            setTimeout(function(){
                var audio = new Audio("sounds/" + request.sound + ".mp3");
                audio.play();
            }, delay);

        }
    }
)