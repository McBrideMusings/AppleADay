function setStorage(chosenGame, cvalue){
    localStorage.setItem("choice", chosenGame);
    var result = localStorage.getItem("choice");
    checkCookieStatus(cvalue);
}

function getCookie() {
    var result = localStorage.getItem("choice");
    console.log(result);
    return result;
}

function checkCookie() {
    var choice = getCookie();
    console.log(choice);
    if (choice === "chosenGame1") {
        checkCookieStatus(1);
    }
    else if (choice === "chosenGame2") {
        checkCookieStatus(2);
    }
    else if (choice === "chosenGame3") {
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