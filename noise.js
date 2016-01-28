$(document).ready(function() {
  var playNote = function(selector) {
    selector.get(0).currentTime=0;
    selector.get(0).play();
  };

  var notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  // var keys = [look up decimal values for keys]

  notes.forEach( function(note) {
    $('.' + note).click( function() {
      playNote($('#' + note + "Audio"));
    });

  keys.forEach( function(key) {
    $('.' + key).keypress( function() {
      playNote($('#' + key + "Audio"));
    });

  });
// // previous code, the DRY version is above
//   $(".instrument .note.c").click(function () {
//     // set timeout so that the note can be played repeatedly without pause
//     $("#audio_embeds #cAudio").get(0).currentTime=0;
//     // play the sound
//     $("#audio_embeds #cAudio").get(0).play();
//   });
  //
  // $(".d").click(function () {
  //   $("#dAudio").get(0).currentTime=0;
  //   $("#dAudio").get(0).play();
  // });
  //
  // $(".e").click(function () {
  //   $("#eAudio").get(0).play();
  // });
  //
  // $(".f").click(function () {
  //   $("#fAudio").get(0).play();
  // });
  //
  // $(".g").click(function () {
  //   $("#gAudio").get(0).play();
  // });
  //
  // $(".a").click(function () {
  //   $("#aAudio").get(0).play();
  // });
  //
  // $(".b").click(function () {
  //   $("#bAudio").get(0).play();
  // });
});
