
// parse input csv or txt file
function readCSV (textFile) {
  const lines = textFile.split(/\r\n|\n/)

  let items = []

  for (let i=0; i<lines.length; i++) {
    if (lines[i].length > 0) {
      let itemsRow = lines[i].split(',')
      for (let j=0; j<itemsRow.length; j++) {
        if (itemsRow[j].length >0) {
          items.push(itemsRow[j])
        }
      }
    }
  }
  return items
}

// handle file upload - file containing menu items
export function getNewMenuList () {

  let fileSelector = document.getElementById("addFile")
  let file = fileSelector.files[0]
  if (!file) {
    alert('Please select a file to upload')
    return false
  }
  const fileReader = new FileReader()
  fileReader.readAsText(file, "UTF-8")

  fileReader.onload = function (event) {
    const text = event.target.result
    const items = readCSV(text)
    console.log(items)
    fileSelector.value = ''
  }
  fileReader.onerror = function () {
    alert('error')
    return false
  }
}

// handle single additions to menu list
export function getNewMenuItem () {
  const newItem = document.getElementById("newItem")
  if (newItem.value) {
    // do something
    console.log(newItem.value)

    // reset field value
    newItem.value = ''
  }
}
