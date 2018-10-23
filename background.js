
const hostList = [
    'newtab',
]

const getHostListRegex = function() {
    return hostList.map(function(host) {
        return '*://' + host + '/*'
    })
}

const getHost = function(url) {
    var a = document.createElement("a");
    a.href = url
    return a.hostname
}

chrome.tabs.onCreated.addListener(function(tab) {
    const newTabHost = getHost(tab.url)
    if (hostList.includes(newTabHost) && tab.incognito) {   
        chrome.tabs.update(tab.id, {
            url: chrome.runtime.getURL('src/templates/newtab.html'),
            active: true
        }, function(tab) {
            console.log('Updated')
        })
        chrome.windows.update(tab.windowId, {focused:true})
    }
})
