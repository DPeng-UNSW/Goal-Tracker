let button = document.getElementById("creator");

//Linked List implementation
class GoalNode {
    constructor(goal_name) {
          this.html = goal_name;
          this.next = null;
          this.previous = null;
          this.id = goal_name;
          this.complete = 0;
    }
}

function newList(goal_name) {
    const head = new GoalNode(goal_name);
    return head;
}

function addNode(head, goal_name) {
    const newNode = new GoalNode(goal_name);
    var last = lastNode(head)
    last.next = newNode;
    newNode.previous = last;
    return newNode;
}

function lastNode(head) {
    for (current = head; current.next != null; current = current.next) {
      //do nothing;
    }
    return current;
}

function removeNode(node) {
    if (node.next != null) {
        node.next.previous = node.previous;
    }
    if (node.previous != null) {
        node.previous.next = node.next;
    }
    if ((node.previous == null) && (node.next == null)) {
        var head = newList("buttonbutton");
    } else if (node.previous == null) {
        head = node.next;
    }
    node = null;
}

function removeList(head) {
    var list = document.getElementsByClassName("delete");
    for(var i = list.length - 1; i > 0; i--) {
        console.log(list[i]);
        list[i].click();
    }
};


function consoleList(head) {
    for(current = head; current != null; current = current.next) {
      console.log("%s ->", current.html);
    }
    console.log("//////////NULL////////////")
}


function displayNode(node, compl) {
    //div class set
    var div = document.createElement("div");
    div.classList.add('white', 'btn-group', 'goal', 'shadow');

    var menu = document.createElement("div");
    menu.classList.add("menu");
    menu.setAttribute("style", "height: 52px;");
    menu.setAttribute("height", "52");
    menu.setAttribute("Subgoal", "0");

    //delete_button class set
    var xbtn = document.createElement("button");
    xbtn.classList.add('delete');
    xbtn.onclick = function(delete_parent) {
        xbtn.parentNode.parentNode.remove();
        removeNode(node);
        saveGoals(head);
    };

    //subgoal creator class set
    var subgoalAdd = document.createElement("button");
    subgoalAdd.classList.add('subgoalCreator', "pointer-events-off");
    subgoalAdd.onclick = function(addSubGoal) {
        var subgoal = document.createElement("button");
        subgoal.classList.add("subgoal");
        menu.appendChild(subgoal);
        if (menu.getAttribute("Subgoal") == "1") {
            var new_height = parseInt(menu.getAttribute("height")) + 46;
        } else {
            var new_height = parseInt(menu.getAttribute("height")) + 55;
        }
        menu.setAttribute("style", "height:" + new_height + "px;");
        menu.setAttribute("height", new_height);
        menu.setAttribute("Subgoal", "1");
        subgoal.focus();
    };

    //edit button class set
    var edit = document.createElement("button");
    edit.classList.add("edit", "pointer-events-off");
    var goalInput = document.createElement("input");
    goalInput.classList.add("goal");
    goalInput.setAttribute("maxlength", "40");
    edit.onclick = function(edit) {
        goalInput.value = node.html;
        btn.replaceWith(goalInput);
        goalInput.focus();
    }

    goalInput.addEventListener("keyup", function() {
        if (event.keyCode === 13) {
            btn.innerHTML = goalInput.value;
            node.html = goalInput.value;
            goalInput.replaceWith(btn);
            saveGoals(head);
            window.focus();
        };
    });
    goalInput.addEventListener("blur", function() {
        btn.innerHTML = goalInput.value;
        node.html = goalInput.value;
        goalInput.replaceWith(btn);
        saveGoals(head);
    });

    //complete button class set
    var complete = document.createElement("button");
    complete.classList.add("complete", "pointer-events-off");
    complete.onclick = function(complete) {
        btn.classList.toggle("grey-text");
        btn.classList.toggle("strike-through");
        if (node.complete == 1) {
            node.complete = 0
        } else {
            node.complete = 1;
        }
        saveGoals(head);
    }

    //button class set
    var btn = document.createElement("button");
    btn.classList.add('goal', 'white');
    edit.classList.toggle("opacity");
    complete.classList.toggle("opacity");
    subgoalAdd.classList.toggle("opacity");
    var can_click = true;
    btn.onclick = function(colourchange) {
        if(can_click == true) {
            div.classList.toggle("clickcolour");
            div.classList.toggle("white");
            btn.classList.toggle("white");
            edit.classList.toggle("opacity");
            complete.classList.toggle("opacity");
            subgoalAdd.classList.toggle("opacity");
            edit.classList.toggle("pointer-events-off");
            complete.classList.toggle("pointer-events-off");
            subgoalAdd.classList.toggle("pointer-events-off");
            can_click = false;
            setTimeout(function() {can_click = true }, 300);
        }
    }

    btn.addEventListener("blur", function() {
        div.classList.remove("clickcolour");
        div.classList.add("white");
        btn.classList.add("white");
        edit.classList.add("opacity");
        complete.classList.add("opacity");
        subgoalAdd.classList.add("opacity");
        setTimeout(function(removeextra) {
        edit.classList.add("pointer-events-off");
        complete.classList.add("pointer-events-off");
        subgoalAdd.classList.add("pointer-events-off");}, 300);

    });
    btn.innerHTML = node.html;
    btn.setAttribute("id", node.id);
    if (compl == 1) {
        btn.classList.toggle("grey-text");
        btn.classList.toggle("strike-through");
        node.complete = 1;
    }


    //Appending Children of the div
    menu.appendChild(div);
    div.appendChild(xbtn);
    div.appendChild(btn);
    menu.appendChild(complete);
    menu.appendChild(edit);
    menu.appendChild(subgoalAdd);

    //Adding goal to the document
    var field = document.body.appendChild(menu);
    return field;
}

function findNode(head, id) {
    for (current = head; current != null; current = current.next) {
        if(current.html == id) {
            return current;
        }
    }
    return false;
}

function saveGoals(head) {
    var i = 1;
    for(var current = head;  current != null; current = current.next) {
        localStorage.setItem("goal" + i, current.html);
        localStorage.setItem("NumberOfGoals", i);
        localStorage.setItem("complete" + i, current.complete);
        i++;
    }

};

var head = newList("BEGINNING OF LIST");
button.onclick = function(createGoal) {
      displayNode(addNode(head, "New Goal..."), 0);
      saveGoals(head);
      consoleList(head);
}

window.onload =  function(restorePage) {
    for(var j = 1;  j < localStorage.getItem("NumberOfGoals"); j++) {
        k = j+1;
        var goalhtml = localStorage.getItem("goal" + k);
        var complete = localStorage.getItem("complete" + k);
        displayNode(addNode(head, goalhtml), complete);
    }
    window.focus();
}

window.onblur = function(refreshing) {
    window.onfocus = function(refresh) {
        console.log("success");
        window.location.reload();
    }
}
