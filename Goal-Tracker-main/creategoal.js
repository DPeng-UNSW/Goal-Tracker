let button = document.getElementById("creator");

button.onclick = function(create) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var inpt = document.createElement("input");
        var div = document.createElement("div");
        var xbtn = document.createElement("button");
        div.classList.add('btn-group');
        div.appendChild(inpt);
        div.appendChild(xbtn);
        inpt.classList.add('goal');
        xbtn.classList.add('delete');
        inpt.setAttribute("contenteditable", "true");
        xbtn.onclick = function(delete_parent) {
            var confirmBtn = document.createElement("BUTTON");
            xbtn.parentNode.remove();
        };
        div.classList.add('goal');
        div.classList.add('shadow');
        inpt.innerHTML = "Goal!";
        document.body.appendChild(div);
    });
  };
