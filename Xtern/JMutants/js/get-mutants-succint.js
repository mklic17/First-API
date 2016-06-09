// this is exactly the same as the other functions together(before working more on it)
// this is not linked to the HTML file
$.get({
  url: 'https://mutant-school.herokuapp.com/api/v1/mutants',
  success: function(mutants) {
    $.each(mutants, function(i, mutant) {
      $('#mutantList').append('<li>' + mutant.mutant_name + '</li>');
    });
  }
});
