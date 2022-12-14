// jQuery
//1. Adding a new item to the list of items:
function newItem(){
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === ''){
    alert('You must write something!');
} else {
    $('#list').append(li);
}

// jQuery
//2. Crossing out an item from the list of items:
function crossOut(){
    li.toggleClass('strike');
}

li.on('dblclick', crossOut);

// jQuery
//3(i). Adding the delete button "X": 
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

function deleteListItem(){
    li.addClass('delete')
}

crossOutButton.on('click', deleteListItem);

$('#list').sortable();

}