chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'loading') {
      chrome.storage.sync.get(['oldUrl', 'newUrl'], function(result) {

        if (result.oldUrl && result.newUrl && tab.url === result.oldUrl) {
          chrome.tabs.update(tabId, {url: result.newUrl});
        }
      });
    }
  });
  