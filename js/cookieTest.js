function setCookie(cname, cvalue, exdays) {
//    var d = new Date();
//    d.setTime(d.getTime() + (exdays*24*60*60*1000));
//    var expire = "expires="+d.toUTCString();
//    document.cookie = name = cname; value = cvalue; expires=expire; ";path=/";
    checkCookieStatus(cvalue);
    var expiration_date = new Date();
    var cookie_string = '';
    expiration_date.setFullYear(expiration_date.getTime() + 31536000000);
    // Build the set-cookie string:
    document.cookie = name=cname; "path=/; expires=" + expiration_date.toUTCString();
    console.log(document.cookie);
}

function getCookie() {
    var ca = document.cookie.split(';');
    console.log(ca);
    return ca;
}

function checkCookie() {
    var choice = getCookie();
    console.log(choice);
    var test1 = ["chosenGame1"]
    var test2 = ["chosenGame2"]
    var test3 = ["chosenGame3"]
    if (choice[0] === test1[0]) {
        checkCookieStatus(1);
    }
    else if (choice[0] === test2[0]) {
        checkCookieStatus(2);
    }
    else if (choice[0] === test3[0]) {
        checkCookieStatus(3);
    }
    else{
        return;
    }
}
function checkCookieStatus(cvalue){
    if(cvalue===1){
    document.getElementById("game").className = "btn-flat"
    document.getElementById("game").href="https://www.google.com/";
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