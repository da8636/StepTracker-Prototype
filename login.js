var person = 'alexandra';
function setLogin(p) {
  if (p == 'alexandra') {
    document.getElementById("dp").src=("alexandra.jpg")
    document.getElementById("name").textContent = 'Alexandra'
  }
  if (p == 'alexander'){ 

    document.getElementById("dp").src=("alexander.jpg")
    document.getElementById("name").textContent = 'Alexander'
  }

  person = p;
}

function login() {
  if(person == "alexandra") {
    window.location.href = "index.html"
  } else if(person == "alexander") {
    window.location.href = "index2.html"
  }
}