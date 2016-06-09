var url = 'https://mutant-school.herokuapp.com/api/v1/mutants/';

function loadMutants(mutants){
  $.each(mutants, function(i, mutant) {
    addMutant(mutant);
  });
    //what is just an individual item in the array
    // each takes an item to iterate over, the i in the array
    //This will continuously call addMutant intil the Mutant list is empty
}

function addMutant(mutant) {
  var li = $('.template')
    .clone()
    .removeClass('template');

  li.find('.mutant-name').text(mutant.mutant_name);
  li.attr('data-id', mutant.id);
  $('#mutantList').append(li);
  //console.log(mutant); //prints all of the mutant objects to the console
  // console.log(mutant.mutant_name); //prints all of the mutants name to the console
  //$('body').prepend(mutant.mutant_name); // gives you big old mess


}

//runs first then calls the loadMutants function
$.get({
  url: url,
  success: loadMutants//no parenthsis
}); // we are getting the url



// get is first called, it starts at the loading of the page
// get is going to finish and fun whatever is after the get function
// loadMutants is called when the ajax requests finishes
// start running $.each,
// each will call addMutant
// find the mutant list with the $('#mutantList') function
// then append is called
// addMutant is then called again
// then append is called
// this goes on until there is no more mutants left to run through
