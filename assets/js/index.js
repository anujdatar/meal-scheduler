
// get today's data and set in the date widget
let today = new Date().toISOString().substr(0, 10)
document.querySelector("#startdate").value = today

dateWidget = document.getElementById("startdate")
console.log(dateWidget.value)

// get file input
let inputFile = document.getElementById("listfile")
// console.log(inputFile)

function generate_cal() {
  console.log('aaaaaaaaaaaaaaaaaaaaaaa')
  let form = document.getElementById("my_form")

  let date = form[0].value
  if (!date) {
    alert('please select date')
  }

  let file = form[1].value
  if (!file) {
    alert('please upload a menu list')
  }

  document.getElementById("my1").innerHTML = date
  document.getElementById("my2").innerHTML = file


  // var XHR = new XMLHttpRequest()
  // var FD = new FormData(form)

  // XHR.addEventListener("load", function(event) {
  //   alert(event.target.responseText)
  // })

  // XHR.addEventListener("error", function(event) {
  //   alert('Oops!')
  // })

  // // XHR.open("POST", "/index.php")

  // // XHR.send(FD)

  // form.addEventListener("submit", function(event) {
  //   event.preventDefault()
  // })

}

