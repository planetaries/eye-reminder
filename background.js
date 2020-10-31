// Copyright © 2020 planetaries. All rights reserved.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({'enabled': true}, function() {
    console.log('enabled initialized to true');
  });
  chrome.alarms.create('20min', {
    delayInMinutes : 20,
    periodInMinutes : 20
  });
  chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === '20min') {
      chrome.storage.sync.get('enabled', function(result) {
        let enabled = result.enabled;
        console.log('20min alarm - enabled=' + enabled);
        if (enabled) {
          alert('reminder to rest your eyes! \n'
            + 'look at something 20 feet away for 20 seconds ♡');
        }
      });
    }
  });
});
