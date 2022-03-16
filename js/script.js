
prepositions =
["an", //0
"mit", //1
"auf", //2
"&Uuml;ber", //3
"&Uuml;ber/mit", //4
"Auf/&Uuml;ber" , //5
"nach",   //6
"f&uuml;r", //7
"gegen", //8
"f&uuml;r/gegen", //9
"von", //10
"zu", //11
"vor"]; //12

verbs = [["denken", 0],//"an"],
["anfangen", 1],//"mit"],
["sich freuen", 5],//"Auf/&Uuml;ber"],
["warten", 2],//"auf"],
["hoffen", 2],//"auf"],
["suchen", 6],//"nach"],
["aufhören", 1],//"mit"],
["sich verlassen", 2],//"auf"],
["sprechen", 4],//"&Uuml;ber/mit"],
["sich unterhalten", 4],//"&Uuml;ber/mit"],
["sich erinnern", 0],//"an"],
["diskutieren", 4],//"&Uuml;ber/mit"],
["antworten", 2],//"auf"],
["glauben", 0],//"an"],
["sich interessieren",7],//"f&uuml;r"],
["sich informieren",3], // "&Uuml;ber"],
["entscheiden", 9],//"f&uuml;r/gegen"],
["achten", 2],//"auf"],
["zufrieden", 1],//"mit"],
["erzahlen", 10],//"von"],
["einladen", 11],//"zu"],
["(keine) Lust haben", 2],//"auf"],
["(keine) Zeit haben", 7],//"f&uuml;r"],
["(keine) Angst haben",12], //"vor"],
["entdecken", 0]];

current_verb = 0;
score=0;
document.getElementById('VerbLabel').innerHTML
                =verbs[current_verb][0] + "<br>";


var body = document.getElementsByTagName("body")[0];
var score_label = body.appendChild(document.createElement("label"));
//score_label.innerHTML = score +"/" + verbs.length + "<br>";

buttons = []

function clearForNextWord()
{
  score++;
  score_label.innerHTML = score +"/" + verbs.length + "<br>";
  current_verb = (current_verb + 1) % verbs.length;
  for (var i = 0; i < buttons.length; i++){
    buttons[i].style = "background: salmon;";
  }

    document.getElementById('VerbLabel').innerHTML
                    =verbs[current_verb][0];
}

for (var i = 0; i < prepositions.length; i++)
{


    var button = body.appendChild(document.createElement("button"));
    buttons.push(button)
    button.value = i;
    button.innerHTML = prepositions[i];

    button.addEventListener ("click", function(event) {
      console.log(event.target.value, " ", verbs[current_verb][1])
      if (event.target.value == verbs[current_verb][1])  {
        clearForNextWord();


      } else {

        event.target.style = "background: red;";
      }

    });
}
