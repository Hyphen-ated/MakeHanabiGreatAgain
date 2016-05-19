//use this little redirect thing to inject our js in the page context instead of extension sandbox, or something
var s = document.createElement('script');
var src = chrome.extension.getURL('make_hanabi_great_again.user.js');

chrome.storage.sync.get({
    MHGA_highlight_non_hand_cards: true,
    MHGA_show_slot_nums: true,
    MHGA_show_no_clues_box: true
}, function(items) {
    var options = "var MHGA_highlight_non_hand_cards = " + items.MHGA_highlight_non_hand_cards + ";\n" +
                  "var MHGA_show_slot_nums = " + items.MHGA_show_slot_nums + ";\n" +
                  "var MHGA_show_no_clues_box = " + items.MHGA_show_no_clues_box + ";";
    do_js_replacement(options);
});


function do_js_replacement(options) {
    s.src = src.replace("//@MHGA_INJECT_OPTIONS", options)
    s.onload = function() {
        this.parentNode.removeChild(this);
    };
    (document.head || document.documentElement).appendChild(s);
}
