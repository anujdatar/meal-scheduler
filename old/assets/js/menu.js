
// get file input
const inputFile = document.getElementById("listfile")
// console.log(inputFile)

function get_menu_list() {
  const form = document.getElementById("my_form")
  // form.submit().preventDefault()

  const file = document.getElementById("listfile").files[0]
  if (!file) {
    alert('please upload a menu list')
    return false
  }
  else {
    const reader = new FileReader()
    reader.readAsText(file, "UTF-8")

    reader.onload = function (event) {
      text = event.target.result
      items = readCSV(text)
      console.log(items)
    }
    reader.onerror = function () {
      alert('error')
      return false
    }
  }
}

function readCSV(fileText) {
  const lines = fileText.split(/\r\n|\n/)  // split at new lines

  // document.getElementById("my1").innerHTML = lines
  let items = []
  for (let i=0; i<lines.length; i++) {
    if (lines[i].length > 0) {
      items_row = lines[i].split(",")
      for (j=0; j<items_row.length; j++) {
        if (items_row[j].length > 0) {
          items.push(items_row[j])
        }
      }
    }
  }
  return items
}

