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
    if (findNode(head, goal_name) == false) {
        const newNode = new GoalNode(goal_name);
        var last = lastNode(head)
        last.next = newNode;
        newNode.previous = last;
        return newNode;
    } else {
        return false;
    }
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
    //delete_button class set
    var xbtn = document.createElement("button");
    xbtn.classList.add('delete');
    xbtn.onclick = function(delete_parent) {
        xbtn.parentNode.parentNode.remove();
        removeNode(node);
    };

    //subgoal creator class set
    var subgoalAdd = document.createElement("button");
    subgoalAdd.classList.add('subgoalCreator');
    subgoalAdd.onclick = function(addSubGoal) {
        var subgoal = document.createElement("input");
        subgoal.classList.add("subgoal");
    };

    //edit button class set
    var edit = document.createElement("button");
    edit.classList.add("edit");
    edit.onclick = function(edit) {
        var newhtml = window.prompt("What is your Goal?", "Goal...");
        if (findNode(head, newhtml) == false) {
            changeHTML(node, newhtml);
        } else {
             alert("This goal has already been entered, Please enter a different goal");
        }
    }

    //complete button class set
    var complete = document.createElement("button");
    complete.classList.add("complete");
    complete.onclick = function(complete) {
      btn.classList.toggle("grey-text");
      btn.classList.toggle("strike-through");
      console.log("sucess");
    }

    //button class set
    var btn = document.createElement("button");
    btn.classList.add('goal', 'white');
    edit.classList.toggle("opacity");
    complete.classList.toggle("opacity");
    subgoalAdd.classList.toggle("opacity");
    btn.onclick = function(colourchange) {
        div.classList.toggle("clickcolour");
        btn.classList.toggle("clickcolour");
        div.classList.toggle("white");
        btn.classList.toggle("white");
        edit.classList.toggle("opacity");
        complete.classList.toggle("opacity");
        subgoalAdd.classList.toggle("opacity");
    }
    btn.innerHTML = node.html;
    btn.setAttribute("id", node.id);

    //div class set
    var div = document.createElement("div");
    div.classList.add('white', 'btn-group', 'goal', 'shadow');

    var menu = document.createElement("div");
    menu.classList.add("menu");

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
function changeHTML(node, newhtml) {
    let btn = document.getElementById(node.html);
    btn.innerHTML = newhtml;
    node.html = newhtml;
    btn.setAttribute("id", newhtml);
}

var head = newList("BEGINNING OF LIST");
button.onclick = function(createGoal) {
      let goal_name = window.prompt("What is your Goal?", "Goal...")
      if (findNode(head, goal_name) == false) {
          displayNode(addNode(head, goal_name));
      } else {
          alert("This goal has already been entered, Please enter a new goal")
      }
      consoleList(head);
}
