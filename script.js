(function () {
  var names = ["Paolo", "Giacomo", "Genoveffo", "Alessandro", "Tommaso", "Francesco", "Leonardo", "Raffaello", "Michelangelo", "Giacomo"];

  for (var i = 0; i < names.length; i++) {

     var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'g') {
       byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
