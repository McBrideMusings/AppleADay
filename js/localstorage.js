function setStorage(chosenGame, cvalue){
    localStorage.setItem(chosenGame, cvalue);
    //var result = localStorage.getItem("choice");
    checkCookieStatus(cvalue);
}

function getCookie(localstoragevar) {
    var result = localStorage.getItem(localstoragevar);
    return result;
}

function checkCookie(localstoragevar) {
	var choice = getCookie(localstoragevar);
	console.log(choice);
	/*
	if (Number(choice) === 1) {
		checkCookieStatus(1);
	}
	else if (Number(choice) === 2) {
			checkCookieStatus(2);
	}
	else if (Number(choice) === 3) {
			checkCookieStatus(3);
	}*/
	if (Number(choice) != null) {
		checkCookieStatus(Number(choice));
	}
	else{
		return;
	}
}
/*
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
*/