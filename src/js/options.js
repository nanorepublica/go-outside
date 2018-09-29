let page = document.getElementById('list-input');
function is_firefox() {
    return typeof(browser) !== 'undefined'
}
function setItem() {
        console.log('Items Updated');
}
function updateList() {
    var listItems = page.value.trim().split('\n')
    // if the last item is empty don't store it
    if (is_firefox()) {
        browser.storage.sync.set({list: listItems})
    } else {
        chrome.storage.sync.set({list: listItems}, setItem);
    } 
}
page.addEventListener('keypress', function(ev) {
    if (ev.keyCode === 13) { // Enter key pressed
        updateList()
    }
});
page.addEventListener('keydown', function(ev) {
    if (ev.keyCode === 46 || ev.keyCode === 8) { // Delete/Backspace key pressed
        updateList()
    }
});
let itemDisplay = document.getElementsByName('item-display');
function setDisplayPref() {
    console.log('Display Preference:', choice);
}
function updateDisplayPref(choice) {
    if (is_firefox()) {
        browser.storage.sync.set({display:choice})
    } else {
        chrome.storage.sync.set({display:choice}, setDisplayPref)
    }
}
itemDisplay.forEach(function(el) {
    el.addEventListener('change', function(ev) {
        var value = ev.target.value;
        updateDisplayPref(value)
    })
})    
function initData(data) {
    console.log(data)
    if (data === undefined) {
        alert('Error getting data from store')
        return
    }
    if (data.hasOwnProperty('list') && data.list !== undefined) {
        page.value = data.list.join('\n')
    }
    if (data.hasOwnProperty('display') && data.display !== undefined) {
        itemDisplay.forEach(function(el) {
            if (data.display === el.value) {
                el.setAttribute('checked', true);
            }
        })
        
    }
};
if (is_firefox()) {
    browser.storage.sync.get(['display', 'list']).then(initData, function(error) {console.log(error)});
} else {
    chrome.storage.sync.get(['display', 'list'], initData);
}
