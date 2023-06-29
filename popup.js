function updatePopup() {
    chrome.storage.local.get(["installDateTime"], function (result) { 
      if (result.installDateTime) { 
        var installDateTime = new Date(result.installDateTime); 
        var currentDate = new Date();
  
        var timeDiff = Math.abs(currentDate - installDateTime);
  
        var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        var hours = Math.floor(timeDiff / (1000 * 60 * 60) % 24);
        var minutes = Math.floor(timeDiff / (1000 * 60) % 60);
  
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
      }
    });
  }
  document.addEventListener("DOMContentLoaded", updatePopup);
  