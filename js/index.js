registerAccount = () => {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let number = document.getElementById("number").value
    let subject = document.getElementById("subject").value
    let password = document.getElementById("password").value
    let newsletter = document.getElementById("newsletter").value

    if(newsletter = true){
        alert("Welcome " + name + "! Thank you for your interest in " + subject + "! We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + number + ".");
    } else {
        alert("Well, well, well... Why don't you want to sign up for our newsletter? You don't seem to be that interested " + name + "! If you want to sign up, you better CHECK that newsletter box!");
    }

    // Not sure how to get the message for when the box is not checked?

}