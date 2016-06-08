var url = 'http://api.icndb.com/jokes/random';
//function When are
// have some event handler

function addJokes(joke){
  $('.jokeGoesHere').append('<li>' + joke + '</li>');
}

$.get({
  //method : 'get'
  url: url,
  success: function(results){
    //process the data
    console.log(results);
    console.log(results.value.joke);
    addJokes(results.value.joke);

  },
})
