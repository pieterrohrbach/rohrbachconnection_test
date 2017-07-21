// global variables for checking whether all references have been guessed
var flags = [
  {name:"sopranos", set:false},
  {name:"whiplash", set:false},
  {name:"lotr", set:false},
  {name:"kotor", set:false},
  {name:"matrix", set:false},
  {name:"heroes", set:false},
  {name:"scott", set:false},
  {name:"pirates", set:false}]

function setFlagByName(name) {
  var x;
  for ( x = 0; x < 8; x++ ) {
    if ( flags[x].name == name ) {
      flags[x].set = true;
      document.getElementById("box").value = "";
    }
  }
}

function isReady() {
  var x;
  for ( x = 0; x < 8; x++ ) {
    if ( !flags[x].set ) {
      return false;
    }
  }
  return true;
}
  
function checkInput() {
  var input;
  input = document.getElementById("box").value;
  if ( input.indexOf("sopranos") != -1 ||
       input.indexOf("Sopranos") != -1 ) {
    document.getElementById("1").innerHTML = "The Sopranos";  
    setFlagByName("sopranos");
  }
  else if ( input.indexOf("whiplash") != -1 ||
       input.indexOf("Whiplash") != -1 ) {
    document.getElementById("2").innerHTML = "Whiplash";
    setFlagByName("whiplash");
  }
  else if ( input.indexOf("lotr") != -1 ||
       input.indexOf("Lord of the Rings") != -1 ||
       input.indexOf("Lord Of The Rings") != -1 ||
       input.indexOf("lord of the rings") != -1 ) {
    document.getElementById("3").innerHTML = "The Lord of the Rings";
    setFlagByName("lotr");
  }
  else if ( input.indexOf("kotor") != -1 ||
       input.indexOf("KotOR") != -1 ||
       input.indexOf("Republic") != -1 ||
       input.indexOf("republic") != -1 ) {
    document.getElementById("4").innerHTML = "The Knights of the Old Republic";
    setFlagByName("kotor");
  }
  else if ( input.indexOf("Matrix") != -1 ||
       input.indexOf("matrix") != -1 ) {
    document.getElementById("5").innerHTML = "The Matrix";
    setFlagByName("matrix");
  }
  else if ( input.indexOf("heroes") != -1 ||
       input.indexOf("Heroes") != -1 ) {
    document.getElementById("6").innerHTML = "Heroes of Might and Magic";
    setFlagByName("heroes");
  }
  else if ( input.indexOf("scott pilgrim") != -1 ||
       input.indexOf("Scott Pilgrim") != -1 ||
       input.indexOf("Scott pilgrim") != -1 ) {
    document.getElementById("7").innerHTML = "Scott Pilgrim vs. The World";
    setFlagByName("scott");
  }
  else if ( input.indexOf("pirates") != -1 ||
       input.indexOf("Pirates") != -1 ) {
    document.getElementById("8").innerHTML = "The Pirates of the Caribean";
    setFlagByName("pirates");
  }
  
  if ( isReady() ) {
    document.getElementById("final").innerHTML = "Je hebt alle antwoorden gevonden! Je cadeau ligt koud in de schuur.";
  
    var song = document.createElement("source");
    song.src = "AmericanJazz.mp3"; 
    song.type = "audio/mpeg";
    
    var music = document.getElementById("music");
    music.setAttributeNode(document.createAttribute("controls"));
    music.setAttributeNode(document.createAttribute("autoplay"));
    music.appendChild(song);    
  }
}

 