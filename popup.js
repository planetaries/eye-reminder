// Copyright © 2020 planetaries. All rights reserved.

'use strict';

let toggle = document.getElementById('toggleReminders');
chrome.storage.sync.get('enabled', function(result) {
  let enabled = result.enabled;
  toggle.setAttribute('value', enabled ? 'enabled' : 'disabled');
});
toggle.onclick = function(element) {
  chrome.storage.sync.get('enabled', function(result) {
    let current = result.enabled;
    element.target.value = current ? 'disabled' : 'enabled';
    chrome.storage.sync.set({'enabled' : !current}, function() {
      chrome.extension.getBackgroundPage().console.log('enabled is set to ' + !current);
    });
  });
}
