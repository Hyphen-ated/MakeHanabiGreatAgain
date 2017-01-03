//keep this in sync with the duplicate code in inject.js
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

// Saves options to chrome.storage.sync.
function save_options() {
  var current_option_values = {};
  for (var key in defined_options) {
    if(defined_options.hasOwnProperty(key)) {
      current_option_values[key] = document.getElementById(key).checked;
    }
  }


  chrome.storage.sync.set(current_option_values, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = "Options saved. Reload the hanabi page if you're in a game.";
    setTimeout(function() {
      status.textContent = '';
    }, 5000);
  });
}


function restore_options() {
  chrome.storage.sync.get(defined_options, function(items) {
    for (var key in defined_options) {
      if(defined_options.hasOwnProperty(key)) {
        document.getElementById(key).checked = items[key];
      }
    }
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
