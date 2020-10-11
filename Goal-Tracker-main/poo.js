let poo = document.getElementById('poo');

poo.onmouseover = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(poo.classList.toggle('center'));
    });
  };
