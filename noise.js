$(document).ready(function() {
  $(".instrument .note.c").click(function () {
    // set timeout so that the note can be played repeatedly without pause
    $("#audio_embeds #cAudio").get(0).currentTime=0;
    // play the sound
    $("#audio_embeds #cAudio").get(0).play();
  });

  $(".instrument .note.d").click(function () {
    $("#audio_embeds #dAudio").get(0).currentTime=0;
    $("#audio_embeds #dAudio").get(0).play();
  });

  $(".instrument .note.e").click(function () {
    $("#audio_embeds #eAudio").get(0).play();
  });

});
