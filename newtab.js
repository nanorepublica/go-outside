// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let outsideList = document.getElementById('outside-list');
chrome.storage.sync.get('list', function(data) { 
    chrome.storage.sync.get('display', function(displayData) { 
        if (data.list !== undefined) {
            if (displayData.display === 'random') {
                var idx = Math.floor((Math.random() * data.list.length)) 
                var choice = data.list[idx]
                outsideList.innerHTML = '<h1>' + choice + '</h1>'
            } else if (displayData.display === 'list') {
                var htmlList = data.list.map(function(i) {return '<li>' + i + '</li>'}).join('\n')
                outsideList.innerHTML = '<ul>' + htmlList + '</ul>'
            } 
        }
    });
});
let background = document.getElementById('background')
let bg_combos = [
  {
    bg: "#cd3232",
    font: "#fff"
  },
  {
    bg: "#3245cd",
    font: "#fff"
  },
  {
    bg: "#9132cd",
    font: "#fff"
  },
  {
    bg: "#32b8cd",
    font: "#fff"
  },
  {
    bg: "#32cd53",
    font: "#fff"
  },
  {
    bg: "#f18e14",
    font: "#fff"
  },
  {
    bg: "#ffeb00",
    font: "#333"
  },
  {
    bg: "#333333",
    font: "#fff"
  },
  {
    bg: "#ffffff",
    font: "#333"
  }
]

let bgidx = Math.floor((Math.random() * bg_combos.length));

background.style.backgroundColor = bg_combos[bgidx].bg
background.style.color = bg_combos[bgidx].font

