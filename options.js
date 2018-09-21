let page = document.getElementById('list-input');
function updateList() {
    var listItems = page.value.split('\n')
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
        var el = ev.target
        console.log(el.value.charAt(el.selectionStart))
        updateList()
    }
});
chrome.storage.sync.get('list', function(data) {
    if (data.list !== undefined) {
        page.value = data.list.join('\n')
    }
});
