var simpsonsCharacters = ["homer", "marge", "bart", "lisa", "maggie", "milhouse", "ralph", "lenny", "carl"];
var guessesRemaining = 10;

function initializeHangdude()
{
    setMysteryCharacter();
    buildGameboard(getMysteryCharacter().split(""));
    setCorrectGuesses(0);
    setGuessesRemaining(10);
}

function takeGuess()
{
    var guessCharacter = document.getElementById("guess-character").value;

    if(true == validateCharactersubmitted(guessCharacter)) {
        if(true == guessCharacterInMysteryCharacter(guessCharacter)) {
            revealLetter(guessCharacter);
        } else {
            setGuessesRemaining(getGuessesRemaining()-1);
            insultPlayerForIncorrectGuess();
        }
    } else {
        insultPlayerForNoLetter();
    }

    checkForGameOver();
}

function buildGameboard(mysteryCharacterName)
{
    var lettersInName = getMysteryCharacter().split("");

    for (var i = 0; i < lettersInName.length; i++) {
         var input = document.createElement("input");
         input.type = "text";
         input.maxLength = 1;
         input.className = "character-panel[" + lettersInName[i] + "]";
         input.value = "?";
         input.disabled = true;
         document.getElementById("letter-panels").appendChild(input);
     };
}

function validateCharactersubmitted(guessCharacter)
{
    if(0 == guessCharacter.length) {
        return false;
    }
    return true;
}

function guessCharacterInMysteryCharacter(guessCharacter, mysteryCharacter)
{
    if(0 > getMysteryCharacter().search(guessCharacter)) {
        return false;
    }
    return true;
}

function getRandomSimpsonsCharacter()
{
    return simpsonsCharacters[Math.floor(Math.random() * (simpsonsCharacters.length-1))];
}

function setMysteryCharacter()
{
    document.getElementById("correct-answer").value = getRandomSimpsonsCharacter();
    return true;
}

function getMysteryCharacter()
{
    return document.getElementById("correct-answer").value;
}

function setGuessesRemaining(guessesRemaining)
{
    document.getElementById("guesses-remaining").value = guessesRemaining;
}

function getGuessesRemaining()
{
    return parseInt(document.getElementById("guesses-remaining").value);
}

function setCorrectGuesses(correctGuesses)
{
    document.getElementById("correct-guesses").value = correctGuesses;
}

function getCorrectGuesses()
{
    return parseInt(document.getElementById("correct-guesses").value);
}

function revealLetter(letterToReveal)
{
    var panelsToReveal = document.getElementsByClassName("character-panel[" + letterToReveal + "]");

    for (var i = 0; i < panelsToReveal.length; i++) {
        panelsToReveal[i].value = letterToReveal;
        setCorrectGuesses(getCorrectGuesses()+1);
    }
}

function insultPlayerForNoLetter()
{
    alert("You need to guess a letter, dingus.");
    return true;
}

function insultPlayerForIncorrectGuess()
{
    alert("Haw Haw! Try again assbutt.");
    return true;
}

function insultPlayerForLosing()
{
    alert("You failed. What is it with you and failure?");
    return true;
}

function congratulatePlayerForWinning()
{
    alert("Woohoo!!!");
    return true;
}

function checkForGameOver()
{
    if(0 == getGuessesRemaining()) {
        insultPlayerForLosing();
        location.reload();
    } else if(getCorrectGuesses() == getMysteryCharacter().length){
        congratulatePlayerForWinning();
        location.reload();
    }
}

initializeHangdude();