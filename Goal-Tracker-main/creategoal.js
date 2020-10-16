let button = document.getElementById("creator");

//Linked List implementation
class GoalNode {
    constructor(goal_name) {
          this.html = goal_name;
          this.next = null;
          this.previous = null;
          this.id = goal_name;
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

function consoleList(head) {
    for(current = head; current != null; current = current.next) {
      console.log("%s ->", current.html);
    }
    console.log("//////////NULL////////////")
}

function reveal(menu) {
    for(var i = 0; i < menu.length; i++) {
        menu[i].setAttribute("style", "display: inline-block;");
    }
}

function displayNode(node) {
    //div class set
    var div = document.createElement("div");
    div.classList.add('white', 'btn-group', 'goal', 'shadow');

    var menu = document.createElement("div");
    menu.classList.add("menu");

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
    subgoalAdd.classList.add('subgoalCreator');
    subgoalAdd.onclick = function(addSubGoal) {
        var subgoal = document.createElement("input");
        subgoal.classList.add("subgoal");
        menu.appendChild(subgoal);
    };

    //edit button class set
    var edit = document.createElement("button");
    edit.classList.add("edit");
    var goalInput = document.createElement("input");
    goalInput.classList.add("goal");
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
        };
    });
    goalInput.addEventListener("blur", function() {
        btn.innerHTML = goalInput.value;
        node.html = goalInput.value;
        goalInput.replaceWith(btn);
    });


    //complete button class set
    var complete = document.createElement("button");
    complete.classList.add("complete");
    complete.onclick = function(complete) {
      btn.classList.toggle("grey-text");
      btn.classList.toggle("strike-through");
    }

    //button class set
    var btn = document.createElement("button");
    btn.classList.add('goal', 'white');
    edit.classList.toggle("opacity");
    complete.classList.toggle("opacity");
    subgoalAdd.classList.toggle("opacity");
    btn.onclick = function(colourchange) {
        div.classList.toggle("clickcolour");
        div.classList.toggle("white");
        btn.classList.toggle("white");
        edit.classList.toggle("opacity");
        complete.classList.toggle("opacity");
        subgoalAdd.classList.toggle("opacity");
    }
    btn.innerHTML = node.html;
    btn.setAttribute("id", node.id);

    //Appending Children of the div
    menu.appendChild(div);
    div.appendChild(xbtn);
    div.appendChild(btn);
    menu.appendChild(complete);
    menu.appendChild(edit);
    menu.appendChild(subgoalAdd);

    //Adding goal to the document
    document.body.appendChild(menu);
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
        i++;
    }

};

var head = newList("BEGINNING OF LIST");
button.onclick = function(createGoal) {
      let goal_name = window.prompt("What is your Goal?", "Goal...")
      if (goal_name.length > 35) {
          alert("This goal is too long, Put goal details inside of the subgoals :)");
          return;
      }
      displayNode(addNode(head, goal_name));
      saveGoals(head);
      console.log(localStorage.getItem("NumberOfGoals"));
      consoleList(head);
}

window.onload =  function(restorePage) {
    console.log(localStorage.getItem("NumberOfGoals"));
    for(var j = 1;  j < localStorage.getItem("NumberOfGoals"); j++) {
        k = j+1;
        var goalhtml = localStorage.getItem("goal" + k);
        displayNode(addNode(head, goalhtml));
    }
}
