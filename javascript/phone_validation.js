function validation() {
    var user = document.getElementById("user").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var emails = document.getElementById("emails").value;

    if (user == "") {
        document.getElementById("username").innerHTML = "** please fill your name **";
        return false;
    }
    if (user.length <= 2) {
        document.getElementById("username").innerHTML = "** User name length be greater than 2 **";
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById("username").innerHTML = "** Only characters **";
        return false;
    }

    if (mobileNumber == "") {
        document.getElementById("mobileno").innerHTML = "** please fill your mobile number **";
        return false;
    }
    if (mobileNumber.length != 10) {
        document.getElementById("mobileno").innerHTML = "** mobile number must be of 10 digit **";
        return false;
    }
    if ((mobileNumber.charAt(0) != 9) && (mobileNumber.charAt(0) != 8) && (mobileNumber.charAt(0) != 7)) {
        document.getElementById("mobileno").innerHTML = "** PHONE-NUMBER MUST START WITH 9 OR 8 OR 7 **";
        return false;
    }



    if (emails == "") {
        document.getElementById("emailidds").innerHTML = "** please fill your Email Id **";
        return false;
    }
    if (emails.indexOf('@') <= 0) {
        document.getElementById("emailidds").innerHTML = "** @ invalid position ** ";
        return false;
    }
    if ((emails.charAt(emails.length-4) != '.') && (emails.charAt(emails.length-3) != '.')) {
        document.getElementById("emailidds").innerHTML = "** . invalid position ** ";
        return false;
    }

}