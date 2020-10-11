let button = document.getElementById("creator");

button.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var btn = document.createElement("BUTTON");
        var div = document.createElement("div");
        btn.classList.add('goal');
        div.appendChild(btn);
        div.classList.add('goal');
        div.classList.add('shadow');
        btn.innerHTML = "Goal!";
        document.body.appendChild(div);
    });
  };
