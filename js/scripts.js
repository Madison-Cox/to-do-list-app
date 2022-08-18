//add item button
function newItem(){
        let li = $('<li class="list"></li>');
        let inputValue = $('#input').val();
        li.append(inputValue);

        if (inputValue === ''){
            alert("Text required");
        } else {
            $('#list').append(li);
        }
        //cross out item by double clicking
        li.on('dblclick', function(){
            li.toggleClass('strike');
        })
        //delete from List
        let crossOutButton = $('<crossOutButton></crossOutButton>');
        crossOutButton.append(document.createTextNode('X'));
        li.append(crossOutButton);
        crossOutButton.on('click', deleteListItem);
        function deleteListItem(){
            li.addClass('delete')
        }
}
$('#list').sortable();
