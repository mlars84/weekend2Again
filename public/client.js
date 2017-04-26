$(document).ready(onReady);
console.log('JQ');

function onReady() {
  $('#calc').on('click', calcInputs );
  $('#clear').on('click', clearFunc);
}

function calcInputs() {
  console.log('calc button');
  var inputOne = $('#inputOne').val();
  var inputTwo = $('#inputTwo').val();
  var operator = $('.operators').val();

  var objectToSend = {
    x: inputOne,
    y: inputTwo,
    type: operator
  };

  $.ajax({
    url: '/calc',
    type: 'POST',
    data: objectToSend,
    success: function( response ) {
      console.log(response);
      display(response);
    }
  });
}

function display(respObj) {
  console.log('display' + respObj);
  $('#answerDiv').text('Result: ' + respObj.answer);
}

function clearFunc() {
  $('#inputOne').val('');
  $('#inputTwo').val('');
  $('#answerDiv').empty();
}
