$(document).ready( function() {
  var cNote = document.getElementById('cAudio');
  $('.note.c').mousedown(function(){    
    cNote.currentTime = 0;    
    cNote.play();
  });

  var dNote = document.getElementById('dAudio');
  $('.note.d').mousedown(function(){
    dNote.currentTime = 0;
    dNote.play();
  });

  var eNote = document.getElementById('eAudio');
  $('.note.e').mousedown(function(){
    eNote.currentTime = 0;
    eNote.play();
  });

  var fNote = document.getElementById('fAudio');
  $('.note.f').mousedown(function(){
    fNote.currentTime = 0;
    fNote.play();
  });

  var gNote = document.getElementById('gAudio');
  $('.note.g').mousedown(function(){
    gNote.currentTime = 0;
    gNote.play();
  });

  var aNote = document.getElementById('aAudio');
  $('.note.a').mousedown(function(){
    aNote.currentTime = 0;
    aNote.play();
  });

  var bNote = document.getElementById('bAudio');
  $('.note.b').mousedown(function(){
    bNote.currentTime = 0;
    bNote.play();
  });
});
