
document.addEventListener('keypress', function (event) {
    if(event.key === "Enter") {
        collectData();
    }
});

function collectData() {
    var user = document.getElementById("user").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var emails = document.getElementById("emails").value;
    var Dream = document.getElementById("Dream").value;

    if(user == '' || mobileNumber == '' || emails == '' || Dream == '' ) {
        alert("Incomplete information!");
        return;
    }

    let json = new Object();
    json.user = user;
    json.mobileNumber = mobileNumber;
    json.emails = emails;
    json.Dream = Dream;
    sendData(json);
}

function sendData(json) {

    let url = "http://localhost/app/api/contact_us.php";
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
        else if(this.readyState == 4)
            alert("Error!\nNot able to connect database");
    };

    xhttp.open("POST", url, true);
    xhttp.send(JSON.stringify(json));
}