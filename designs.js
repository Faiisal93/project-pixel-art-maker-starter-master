// Select color input
// Select size input
var hieght, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
  event.preventDefault();
  hieght = $('#inputHeight').val();
  width = $('#inputWidth').val();

  makeGrid(hieght, width);

 // console.log('Height: ' + hieght + ' and width: ' + width);

})


function makeGrid(A, B) {
 $('tr').remove();

// Your code goes here!
for (var i = 1; i <= A; i++) {
    $('#pixelCanvas').append('<tr id=table'  + i + '></tr>');
    for (var j = 1; j <=B; j++) {
        $('#table' + i).append('<td></td>');

    }

}

// add color to cell
$('td').click(function addcolor() {
   color = $('#colorPicker').val();

   if ($(this).attr('style')) {
       $(this).removeAttr('style')

   } else { 
     $(this).attr('style', 'background-color:' + color);  
   }

})

}