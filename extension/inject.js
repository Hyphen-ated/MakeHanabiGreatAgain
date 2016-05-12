//use this little redirect thing to inject our js in the page context instead of extension sandbox, or something
var s = document.createElement('script');
s.src = chrome.extension.getURL('make_hanabi_great_again.user.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);