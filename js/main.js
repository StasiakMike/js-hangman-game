var password = "sample secret password";
password = password.toLocaleUpperCase();

var passwordLength = password.length;

var missedNo = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var passwordHidden = "";

for (i=0; i<passwordLength; i++) {
    if(password.charAt(i)==" ") passwordHidden = passwordHidden + " ";
    else passwordHidden = passwordHidden + "-";
}

function showPassword() {

    document.getElementById("password").innerHTML = passwordHidden;
    alphabeth();
}

window.onload = showPassword;

var letters = new Array(26);

letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "Q";
letters[17] = "R";
letters[18] = "S";
letters[19] = "T";
letters[20] = "U";
letters[21] = "V";
letters[22] = "W";
letters[23] = "X";
letters[24] = "Y";
letters[25] = "Z";


function alphabeth() {
    var content = "";

    for (i=0;i<=25;i++) {

        var element = "ltr" + i;

        content = content + '<div class="letter" onclick="checkLtr('+ i +')" id="'+element+'">'+letters[i]+'</div>';
    }

    document.getElementById("alphabeth").innerHTML = content;
}

String.prototype.setChar = function(place, char) {
    if(place > this.length - 1) return this.toString();
    else return this.substr(0, place) + char + this.substr(place+1);
}

function checkLtr(no) {

    var scored = false;

    for (i=0; i<passwordLength; i++) {
        if(password.charAt(i)==letters[no]) {
            passwordHidden = passwordHidden.setChar(i,letters[no]);
            scored = true;
        }
    }

    if(scored == true) {

        yes.play();
        var element = "ltr" + no;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        showPassword();
        
    } else {
        no.play();
        var element = "ltr" + no;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");
        
        missedNo++;
        var pic = "img/s"+ missedNo +".jpg";
        document.getElementById("hangman").innerHTML = '<img src="'+pic+'" alt="" />';
    }

    //win
    if(password == passwordHidden)
    document.getElementById(alphabeth).innerHTML = "Cool! That's correct password: "+password+ '<br><br><span class="reset" onclick="location.reload()">PLAY AGAIN?</span>'

    //fail
    if(missedNo>=9)
    document.getElementById(alphabeth).innerHTML = "You lost! Correct password is: "+password+ '<br><br><span class="reset" onclick="location.reload()">TRY AGAIN?</span>'
}

