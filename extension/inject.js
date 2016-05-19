//use this little redirect thing to inject our js in the page context instead of extension sandbox, or something
var src = chrome.extension.getURL('make_hanabi_great_again.user.js');

chrome.storage.sync.get({
    "MHGA_highlight_non_hand_cards": true,
    "MHGA_show_slot_nums": true,
    "MHGA_show_no_clues_box": true,
    "MHGA_show_debug_messages": false
}, function(items) {
    var newscript = document.createElement('script');
    newscript.src = src;
    newscript.onload = function() {
        this.parentNode.removeChild(this);
    };
    (document.head || document.documentElement).appendChild(newscript);

    var hiddenCheckboxes = document.createElement('div');
    var box = document.createElement('input');
    box.type = "checkbox";
    box.id = "MHGA_highlight_non_hand_cards";
    box.checked = items.MHGA_highlight_non_hand_cards;
    hiddenCheckboxes.appendChild(box);

    box = document.createElement('input');
    box.type = "checkbox";
    box.id = "MHGA_show_slot_nums";
    box.checked = items.MHGA_show_slot_nums;
    hiddenCheckboxes.appendChild(box);

    box = document.createElement('input');
    box.type = "checkbox";
    box.id = "MHGA_show_no_clues_box";
    box.checked = items.MHGA_show_no_clues_box;
    hiddenCheckboxes.appendChild(box);

    box = document.createElement('input');
    box.type = "checkbox";
    box.id = "MHGA_show_debug_messages";
    box.checked = items.MHGA_show_debug_messages;
    hiddenCheckboxes.appendChild(box);

    (document.head || document.documentElement).appendChild(hiddenCheckboxes);
});