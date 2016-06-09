var studentURL = 'https://xtern-roster.herokuapp.com/people';
var rivalryURL = 'https://xtern-roster.herokuapp.com/rivalries'; // you will need a query string to continue

function AddTheStudentsToList(studentNames){
  // for (var i = 0; i < studentNames.length; i++){

    $.each(studentNames, function(i, name){
      var name = studentNames[i].name
      $('#StudentNames').append('<li>' + name + '</li>');
    })


}

$.get({
  url: studentURL,
  success: AddTheStudentsToList,
})
