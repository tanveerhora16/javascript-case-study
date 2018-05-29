function CokeSong(){

}

CokeSong.prototype.verse = function( verseNumber){

 
  verse1 = verseNumber + ' cans of coke in the box, ' + verseNumber + ' cans of coke.\n';

  verse2 = 'Take one down and pass it around, ' + (verseNumber - 1) + ' cans of coke in the box.\n';

  if(verseNumber == 2) {

  verse2  = 'Take one down and pass it around, ' + (verseNumber - 1) + ' can of coke in the box.\n';

    }

if(verseNumber == 1){

  verse1 = verseNumber + ' can of coke in the box, ' + verseNumber + ' can of coke.\n';

  verse2 = 'Take it down and pass it around, no more cans of coke in the box.\n';
 }

 if(verseNumber == 0){

  verse1 = 'No more cans of coke in the box, no more cans of coke.\n';
  
  verse2 = 'Go to the store and buy some more, 99 cans of coke in the box.\n';
 }
return verse1 + verse2;

}


CokeSong.prototype.sing = function(startVerseNumber, endVerseNumber) {

endSong = "";

   if(endVerseNumber == undefined || endVerseNumber == null){

    endVerseNumber = 0;

    }

 for (var i = startVerseNumber; i >= endVerseNumber; i--) {

  if(i == endVerseNumber){

   endSong = endSong + this.verse(i);

  } 
  else {

        endSong = endSong + this.verse(i) + '\n';
    }
  
 }

 return  endSong;

}

module.exports = CokeSong;





