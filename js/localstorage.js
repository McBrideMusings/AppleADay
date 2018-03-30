function setStorage(localstoragevar, cvalue){
    localStorage.setItem(localstoragevar, cvalue);
    checkCookieStatus(localstoragevar);
    console.log(cvalue);
}

function getCookie(localstoragevar) {
    var result = localStorage.getItem(localstoragevar);
    return result;
}

function checkCookie(localstoragevar) {
	var choice = getCookie(localstoragevar);
	console.log(choice);
	if (Number(choice) != null) {
		checkCookieStatus(Number(choice));
	}
	else{
		return;
	}
}