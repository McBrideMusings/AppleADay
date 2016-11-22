function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    checkCookieStatus(cvalue);
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var choice1 = getCookie("choice1");
    var choice2 = getCookie("choice2");
    var choice3 = getCookie("choice3");
    if (choice1 != "") {
        checkCookieStatus(1);
    }
    else if (choice2 != "") {
        checkCookieStatus(2);
    }
    else if (choice3 != "") {
        checkCookieStatus(1);
    }
    else{
        return;
    }
}
/*
function checkCookieStatus(cvalue){
    if(cvalue===1){
    document.getElementById("game").className = "btn-flat"
    document.getElementById("game").href="/games/";
    document.getElementById("decision1").innerHTML = "You chose this game!";
    document.getElementById("decision2").style.visibility = "hidden";
    document.getElementById("decision3").style.visibility = "hidden";
    }
    if(cvalue===2){
    document.getElementById("game").className = "btn-flat"
    document.getElementById("game").href="https://www.google.com/";
    document.getElementById("decision1").style.visibility = "hidden";
    document.getElementById("decision2").innerHTML = "You chose this game!";
    document.getElementById("decision3").style.visibility = "hidden";
    }
    if(cvalue===3){
    document.getElementById("game").className = "btn-flat"
    document.getElementById("game").href="https://www.google.com/";
    document.getElementById("decision1").style.visibility = "hidden";
    document.getElementById("decision2").style.visibility = "hidden";
    document.getElementById("decision3").innerHTML = "You chose this game!";
    }
}
*/