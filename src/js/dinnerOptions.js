import axios from 'axios'


// ***************** reading files ***********************************
function readCSV (textFile) {
  // parse input csv or txt file
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

export function getNewMenuList () {
  // handle file upload - file containing menu items
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
// *******************************************************************


// ********** string operations ***************************************
function removeCharactersFromString(string, filterItems) {
  // remove unwanted characters for string compare
  filterItems.forEach(filter => {
    while(string.indexOf(filter) > -1) {
      string = string.replace(filter, "")
    }
  })
  return string
}

function isItemInList (list, newEntry) {
  // check if a string item exists in a list

  // transform elements of list for compare
  let modifiedList = []
  const filters = [" ", "'", "-", ","]
  list.forEach(item => {
    item = removeCharactersFromString(item, filters)
    modifiedList.push(item.toLowerCase())
  })
  
  // transform newly entered item
  newEntry = removeCharactersFromString(newEntry, filters)
  newEntry = newEntry.toLowerCase()

  console.log(modifiedList)
  console.log(newEntry)

  if (modifiedList.indexOf(newEntry) > -1) {
    console.log('old item')
    return true
  }
  console.log('new item')
  return false
}
// ********************************************************************


// *************** add a single item to the db ************************
function writeToDb (newEntry) {
  // read from db
  axios.get('http://localhost:3000/getListOfItems')
  .then (response => {
    // make list of names from db entries
    let existingList = []
    const dbEntries = response.data
    dbEntries.forEach( dbEntry => {
      existingList.push(dbEntry.name)
    })
    // check if item is in list
    if (!isItemInList(existingList, newEntry)) {
      console.log('new item, add it to the db')
    } else {
      console.log('item in db already, do nothing')
    }

  })
}
// ********************************************************************


// ********************************************************************
export function getNewMenuItem () {
  // handle single additions to menu list
  const newItem = document.getElementById("newItem")
  if (newItem.value) {
  
    // read and reset field value
    const newItemName = newItem.value
    newItem.value = ''

    // write to db
    writeToDb(newItemName)

  }
}
// ********************************************************************



// .then (response => {
    //   const jsonData = response.data
    //   jsonData.forEach(doc => {
    //     if (newItemName.toUpperCase() === doc.name.toUpperCase()) {
    //       console.log('same')
    //       return false
    //     } else {
    //       console.log('new item')
    //       let newDoc = {
    //         name: newItemName,
    //         selected: true
    //       }
    //       console.log(newDoc)

    //       axios.post('http://localhost:3000/addItemToDb', newDoc)
    //         .then(resp => {
    //           console.log(resp.data)
    //           console.log('maybe')
    //         })
    //         .catch(function (error) {
    //           console.log(error)
    //         })
    //     }


    //   })
    // })