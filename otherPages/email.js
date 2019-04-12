function submit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;


    var mailToLink = "mailto:ayushiporwal5@gmail.com?body=" + encodeURIComponent("Hey");
    window.location.href = mailToLink;
}