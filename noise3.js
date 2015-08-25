$(document).ready( function() {
  $('.note').mousedown(function() {
    playNote($(this).text());
  });

  var note_letters = ['a','b','c','d','e','f','g'];
  $('html').keypress(function(event) {
    var letter = String.fromCharCode(event.which);
    if (note_letters.indexOf(letter) > -1) {
      playNote(letter); //play the note

      //add a style for 0.1 seconds
      $('.note.' + letter).addClass('active');
      setTimeout(function() {
        $('.note').removeClass("active");
      }, 100);
    }
  })
});

function playNote(note) {
  var note_id = note + "Audio";
  var note = document.getElementById(note_id);
  note.currentTime = 0;    
  note.play();
}
