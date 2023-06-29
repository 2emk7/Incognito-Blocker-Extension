chrome.tabs.onCreated.addListener(function(tab) {
    if (tab.incognito) {
      chrome.tabs.remove(tab.id);
    }
  });
  chrome.runtime.onInstalled.addListener(function () {
    var installDate = new Date().toLocaleDateString();
    var installTime = new Date().toLocaleTimeString();
    var installDateTime = new Date().toISOString(); 
    chrome.storage.local.set({ installDate: installDate, installTime: installTime, installDateTime: installDateTime }); 
  });
  
  