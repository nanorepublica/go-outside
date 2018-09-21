// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let outsideList = document.getElementById('outside-list');
chrome.storage.sync.get('list', function(data) { 
    console.log(data)
    if (data.list !== undefined) {
        var htmlList = data.list.map(function(i) {return '<li>' + i + '</li>'}).join('\n')
        outsideList.innerHTML = htmlList   
    }
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

let idx = Math.floor((Math.random() * bg_combos.length) + 1);

console.log(idx)
background.style.backgroundColor = bg_combos[idx].bg
background.style.color = bg_combos[idx].font

