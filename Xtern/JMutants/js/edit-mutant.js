function editMutant(ev) {
  ev.preventDefault();
  var form = ev.currentTarget; //you need to get the form to do this
  var mutantName = form.mutantName.value;
  var mutantId = form.mutantId.value
  debugger;

  $.ajax ({
    url: url + '/' + mutantid,
    method: 'PUT',
    data: {
      mutant: {
        mutant_name: mutantName,
        real_name: form.realName.value,//form.realName.value,
        power: form.power.value
      }
    },
    always: function() {
      console.log('Momma we almost made it')
    },
    success: function() {
      console.log('Momma we made it')//addTheNewMutant(mutant)
    }
  });
};


  function editTheLabel(){
    console.log('Momma we maade it');
    // $('.mutantName').value = mutant.mutant_name;
    // $('.realName').value = mutant.real_name;
    // $('power').value = mutant.power;
  }

  function addTheNewMutant(mutant) {
    var li = $('li[data-id="' + mutant.id + '"]');
    var span = li.find('.mutant-name');
    span.text(mutant.mutant_name);
}
