$(document).ready( function() {
  $('.note').mousedown(function() {
    var note_id = $(this).text() + "Audio";
    var note = document.getElementById(note_id);
    note.currentTime = 0;    
    note.play();
  });
});
