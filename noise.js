$(document).ready(function() {
  $(".instrument .note.c").click(function () {
    // set timeout so that the note can be played repeatedly without pause
    $("#audio_embeds #cAudio").get(0).currentTime=0;
    // play the sound
    $("#audio_embeds #cAudio").get(0).play();
  });

  $(".d").click(function () {
    $("#dAudio").get(0).currentTime=0;
    $("#dAudio").get(0).play();
  });

  $(".e").click(function () {
    $("#eAudio").get(0).play();
  });

  $(".f").click(function () {
    $("#fAudio").get(0).play();
  });

  $(".g").click(function () {
    $("#gAudio").get(0).play();
  });

  $(".a").click(function () {
    $("#aAudio").get(0).play();
  });

  $(".b").click(function () {
    $("#bAudio").get(0).play();
  });
});
