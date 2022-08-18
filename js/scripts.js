function newItem(){
        let li = $('<ol class="list">(inputValue)</ol>');
        let inputValue = $('#input').val();
        li.append(inputValue);

        if (inputValue === ''){
            alert("Text required");
        } else {
            $('#list').append(li);
        }
        //cross out item by double clicking
        li.on('click', function(){
            li.addClass('strike');
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
