// Saves options to chrome.storage.sync.
function save_options() {
  var MHGA_highlight_non_hand_cards = document.getElementById('MHGA_highlight_non_hand_cards').checked;
  var MHGA_show_slot_nums = document.getElementById('MHGA_show_slot_nums').checked;
  var MHGA_show_no_clues_box = document.getElementById('MHGA_show_no_clues_box').checked;

  chrome.storage.sync.set({
    "MHGA_highlight_non_hand_cards": MHGA_highlight_non_hand_cards,
    "MHGA_show_slot_nums": MHGA_show_slot_nums,
    "MHGA_show_no_clues_box": MHGA_show_no_clues_box
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = "Options saved. Reload the hanabi page if you're in a game.";
    setTimeout(function() {
      status.textContent = '';
    }, 5000);
  });
}


function restore_options() {
  chrome.storage.sync.get({
    "MHGA_highlight_non_hand_cards": true,
    "MHGA_show_slot_nums": true,
    "MHGA_show_no_clues_box": true
  }, function(items) {
    document.getElementById('MHGA_highlight_non_hand_cards').checked = items.MHGA_highlight_non_hand_cards;
    document.getElementById('MHGA_show_slot_nums').checked = items.MHGA_show_slot_nums;
    document.getElementById('MHGA_show_no_clues_box').checked = items.MHGA_show_no_clues_box;

  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
