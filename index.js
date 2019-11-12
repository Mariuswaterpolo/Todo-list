var list = document.querySelector('ul');
var inputSubmit = document.getElementById('text');
function addNewToDo()
{
   event.preventDefault();
   var newElement = event.target.newToDo.value;
   var newElementInTheList = document.createElement('li');
   newElementInTheList.innerHTML = newElement;
   list.appendChild(newElementInTheList);
   inputSubmit.value = "";
}
    newToDoInputvalue = "";





