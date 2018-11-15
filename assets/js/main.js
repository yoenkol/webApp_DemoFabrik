function validateForm() {
    var name = document.getElementById('name').value;
    if (name == "") {
        document.getElementById('status').innerHTML = '<span style="color:#FF0000" padding="100px"> Name ist ein Pflichtfeld </span>';
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.getElementById('status').innerHTML = '<span style="color:#FF0000" padding="100px"> Email ist ein Pflichtfeld </span>';
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.getElementById('status').innerHTML = '<span style="color:#FF0000" padding="100px"> Email Format stimmt nicht </span>';
            return false;
        }
    }
    var subject = document.getElementById('subject').value;
    if (subject == "") {
        document.getElementById('status').innerHTML = '<span style="color:#FF0000" padding="100px"> Betreff ist ein Pflichtfeld </span>';
        return false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
        document.getElementById('status').innerHTML = '<span style="color:#FF0000" padding="100px"> Nachricht ist ein Pflichtfeld </span>';
        return false;
    }

    document.getElementById('status').value = "Sendet...";
    document.getElementById('contact-form').submit();
}

document.getElementById("login").addEventListener("click", function(){
    if(checksum===0){
        $('#modalLogin').modal('show');
        console.log("Modal will open!");
    }else{
         //$('.modal-backdrop').remove();
        console.log("You are logged in Modal will not open, please log off!");
    }
});

document.getElementById("logout").addEventListener("click", function(){
    checksum=0;
    setTimeout(function(){ $('#logout-modal').modal('hide'); }, 1200);
    //$('#logout-modal').modal('hide');
    //$('.modal-backdrop').remove();
    //document.getElementById('login').style.visibility = 'visible';
    //document.getElementById('signupbtn').style.visibility = 'visible';
    //document.getElementById('logout').style.visibility = 'hidden';
    console.log("Checksum after Logout: "+ checksum);
    console.log("User is logged off");
    window.location.reload();
});

var objPeople = [
	{ // Object @ 0 index
		username: "Yusef",
		password: "Hallo"
	},
	{ // Object @ 1 index
		username: "Marcel",
		password: "Hallo"
	},
	{ // Object @ 2 index
		username: "Julius",
		password: "Hallo"
	},
    { // Object @ 3 index
		username: "Dennis",
		password: "Hallo"
	}

]
var checksum = 0;

function getInfo() {
	var username = document.getElementById('userid').value
	var password = document.getElementById('passwordinput').value

	for(var i = 0; i < objPeople.length; i++) {
		// abchecken ob user eingaben den daten des jeweiligen Indexes in objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
            if(checksum===0){
			console.log("User: " + username + ", is logged in!");
            document.getElementById('statusLogin').style.visibility = 'hidden';
            $('#modalLogin').modal('hide');//$('#modalLogin').modal('toggle'); // put your default event here
            $('.modal-backdrop').remove();
            $('#welcome-modal').modal('show');
            setTimeout(function(){ $('#welcome-modal').modal('hide'); }, 1200);
            document.getElementById('login').style.visibility = 'hidden';
            document.getElementById('signupbtn').style.visibility = 'hidden';
            document.getElementById('logout').style.visibility = 'visible';
            checksum++;
            console.log("Is someone logged on: " + checksum + ", 0/no & 1/yes");
            break;
            }
            if(checksum===1){
             document.getElementById('statusLogin').innerHTML = '<span style="color:#FF0000" padding="100px">Sie sind bereits eingeloggt</span>';
            document.getElementById('statusLogin').style.visibility = 'visible';
            }


        }else{
            document.getElementById('statusLogin').style.visibility = 'visible';
            document.getElementById('statusLogin').innerHTML = '<span style="color:#FF0000"               padding="100px">Geben Sie ihre LoginDaten erneut an</span>';
            console.log("Is someone logged on: " + checksum + ", 0/no & 1/yes");

            }
	}


}
