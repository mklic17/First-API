//$(document).on('click', 'a.Another Joke', handleThis);

var url = 'http://api.icndb.com/jokes/random';

function doSomething() {
  console.log('Yaaaa');
  // ev.preventDefault();
  // ev.currentTarget;
  $.get({
    url: url,
    success: addJokes

  })
};


function addJokes(joke){
  var things = joke.value.joke;
  $('.jokeGoesHere').append('<li>' + things + '</li>');
}
