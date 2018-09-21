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
