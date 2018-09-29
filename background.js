

chrome.tabs.onCreated.addListener(function(tab) {
    console.log(tab)
    if (tab.incognito) {
        tab.url = 'https://google.com'
    }
})
