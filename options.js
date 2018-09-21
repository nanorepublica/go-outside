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
