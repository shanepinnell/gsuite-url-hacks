// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback called when the URL of the current tab
 *   is found.
 */

function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

// function hackURL(url, hack) {
//   var url = url.substr(0, url.lastIndexOf("/edit")) + "/" + hack;
//   console.log(url);
//   var script = 'window.location.replace(' + url + ')';
//   console.log(script);
//   chrome.tabs.executeScript({
//     code: script

//   });
// }

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    console.log(url);
  });
});

document.querySelector("#hackGroup").addEventListener("click", () => {
    getCurrentTabUrl((url) => {
      console.log(url);
    });
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        alert("Hello " + clickedItem);
    }
    e.stopPropagation();
}