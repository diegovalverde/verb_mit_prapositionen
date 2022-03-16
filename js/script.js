
prepositions = ["an", "mit", "auf", "&Uuml;ber", "nach", "f&uuml;r", "gegen", "von", "zu"];
verbs = [["denken","an"],["anfangen","mit"]];

current_verb = 0;
score=0;
document.getElementById('VerbLabel').innerHTML
                =verbs[current_verb][0] + "<br>";

buttons = []

function clearForNextWord()
{
  current_verb = (current_verb + 1) % verbs.length;
  for (var i = 0; i < buttons.length; i++){
    buttons[i].style = "background: salmon;";
  }

    document.getElementById('VerbLabel').innerHTML
                    =verbs[current_verb][0] + "<br>";
}

for (var i = 0; i < prepositions.length; i++)
{

    var body = document.getElementsByTagName("body")[0];
    var button = body.appendChild(document.createElement("button"));
    buttons.push(button)
    button.innerHTML = prepositions[i];

    button.addEventListener ("click", function(event) {

      if (event.target.innerHTML === verbs[current_verb][1]){
        clearForNextWord();


      } else {

        event.target.style = "background: red;";
      }

    });
}

function GetScore(){
  return score;
}
