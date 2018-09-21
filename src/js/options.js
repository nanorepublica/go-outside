let page = document.getElementById('list-input');
function updateList() {
    var listItems = page.value.split('\n')
    // if the last item is empty don't store it
    if (!listItems.slice(-1)[0]) {
        listItems = listItems.slice(0, -1)
    }
    chrome.storage.sync.set({list: listItems}, function() {
        console.log('Items Updated');
    })
}
page.addEventListener('keypress', function(ev) {
    if (ev.keyCode === 13) { // Enter key pressed
        updateList()
    }
});
page.addEventListener('keydown', function(ev) {
    if (ev.keyCode === 46 || ev.keyCode === 8) { // Enter key pressed
        updateList()
    }
});
chrome.storage.sync.get('list', function(data) {
    if (data.list !== undefined) {
        page.value = data.list.join('\n')
    }
});

let itemDisplay = document.getElementsByName('item-display');
function updateDisplayPref(choice) {
    chrome.storage.sync.set({display:choice}, function() {
        console.log('Display Preference:', choice);
    })
}
itemDisplay.forEach(function(el) {
    el.addEventListener('change', function(ev) {
        var value = ev.target.value;
        updateDisplayPref(value)
    })
})
chrome.storage.sync.get('display', function(data) {
    if (data.display !== undefined) {
        itemDisplay.forEach(function(el) {
            if (data.display === el.value) {
                el.setAttribute('checked', true);
            }
        })
        
    }
});
