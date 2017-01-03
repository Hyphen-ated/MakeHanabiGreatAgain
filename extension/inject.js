//use this little redirect thing to inject our js in the page context instead of extension sandbox, or something
var injectScript = function(filename) {
    var src = chrome.extension.getURL(filename);
    var newscript = document.createElement('script');
    newscript.src = src;
    newscript.onload = function() {
        this.parentNode.removeChild(this);
    };
    (document.head || document.documentElement).appendChild(newscript);
}

injectScript('make_hanabi_great_again.user.js');


//keep this in sync with the duplicate code in options.js
var defined_options =
{
    "MHGA_highlight_non_hand_cards": true,
    "MHGA_show_slot_nums": true,
    "MHGA_show_no_clues_box": true,
    "MHGA_beep_notifications": false,
    "MHGA_show_more_log": true,
    "MHGA_show_debug_messages": false,
    "MHGA_show_log_numbers": true,
    "MHGA_colorblind_mode": false
}

chrome.storage.sync.get(defined_options, function(items) {
    var hiddenCheckboxes = document.createElement('div');
    for (var key in items) {
        if(items.hasOwnProperty(key)) {
            var box = document.createElement('input');
            box.type = "checkbox";
            box.id = key;
            box.checked = items[key];
            hiddenCheckboxes.appendChild(box);
        }
    }

    (document.head || document.documentElement).appendChild(hiddenCheckboxes);
});