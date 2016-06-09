$(document).on('click', 'a.delete', handleDeleteClick);
//pass the raw document in

function handleDeleteClick(ev) {
  ev.preventDefault();
  var li = $(ev.currentTarget).closest('li'); //currentTarger is the link
  var id = li.attr('data-id');
    deleteMutant(id);
  }

  function deleteMutant(id) {
    $.ajax({
      method: 'delete',
      url: url + '/' + id,
      success: function() {
        $('li[data-id=' + id + ']').remove();
      },
    });
  }
