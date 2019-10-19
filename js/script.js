function myInsta() {
    window.open("https://www.instagram.com/destiayuk/", "_blank");
  }

function myWA(){
    window.open("https://api.whatsapp.com/send?phone=6282158586554", "_blank");
}

function myTwitt(){
    window.open("https://twitter.com/Phrr31", "_blank");
}

function myEmail(){
    window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=destiayuk31@gmail.com&body=my-text")
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
