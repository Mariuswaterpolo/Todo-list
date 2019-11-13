var list = document.querySelector('ul');
var inputSubmit = document.getElementById('text');
function addNewToDo()
{
   event.preventDefault();
   var newElement = event.target.newToDo.value;
   var newElementInTheList = document.createElement('li');
   newElementInTheList.innerHTML = newElement;
   newElementInTheList.setAttribute('onclick', 'removeTodo()');
   list.appendChild(newElementInTheList);
   inputSubmit.value = "";
}
    newToDoInputvalue = "";

function removeTodo()
{
   var el = event.target;
   var parentEl = el.parentNode;
   parentEl.removeChild(el);
}



