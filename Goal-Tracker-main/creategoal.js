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
    return head;
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

    //button class set
    var btn = document.createElement("button");
    btn.classList.add('goal', 'white');
    btn.onclick = function(colourchange) {
        div.classList.toggle("brown");
        btn.classList.toggle("brown");
        div.classList.toggle("white");
        btn.classList.toggle("white");
    }
    btn.innerHTML = node.html;
    btn.setAttribute("id", node.id);

    //delete_button class set
    var xbtn = document.createElement("button");
    xbtn.classList.add('delete');
    xbtn.onclick = function(delete_parent) {
        xbtn.parentNode.remove();
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
        changeHTML(node, newhtml);
    }

    //complete button class set
    var complete = document.createElement("button");
    complete.classList.add("complete");
    complete.onclick = function(complete) {
      btn.setAttribute("style", "text-decoration: line-through;");
    }

    //div class set
    var div = document.createElement("div");
    div.classList.add('white', 'btn-group', 'goal', 'shadow');
    //div.addEventListener("mouseover", reveal(menu[subgoal, edit, complete]));

    //Appending Children of the div
    div.appendChild(btn);
    div.appendChild(xbtn);
    //Adding goal to the document
    document.body.appendChild(div);
}
function findNode(head, id) {
    for (current = head; current != null; current = current.next) {
        if(current.html == id) {
            return current;
        }
    }
    console.log("There is no node with this ID");
    //console.log("There is no node with the given ID");
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
      addNode(head, goal_name);
      displayNode(lastNode(head));
      consoleList(head);
}
