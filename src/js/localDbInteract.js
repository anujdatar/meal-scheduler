import axios from 'axios'

// render data sent from db server
export function renderMenuItem (ul, doc) {
  let li = document.createElement('li')

  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = doc.selected

  let name = document.createElement('span')
  let removeBtn = document.createElement('button')

  li.setAttribute('data-id', doc._id)
  name.textContent = doc.name
  removeBtn.textContent = 'Remove'

  li.appendChild(checkbox)
  li.appendChild(name)
  li.appendChild(removeBtn)

  ul.appendChild(li)
}

export function renderMenuList () {
  const menuList = document.getElementById('menuList')

  axios.get('http://localhost:3000/getListOfItems')
  .then (response => {
    const jsonData = response.data
    // console.log(jsonData)
    jsonData.forEach(doc => {
      // console.log(doc._id)
      // console.log(doc.name)
      // console.log(doc.selected)
      renderMenuItem(menuList, doc)
    })
  })
}

// write to database
export function writeLocalDb (doc) {
  console.log(doc)
}
