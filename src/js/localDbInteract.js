import axios from 'axios'

// render data sent from db server
function renderMenuItem (ul, doc) {

  // define HTML elements
  let li = document.createElement('li')
  let checkbox = document.createElement('input')
  let name = document.createElement('span')
  let removeBtn = document.createElement('button')

  // assign element properties and data
  li.setAttribute('data-id', doc._id)
  checkbox.type = 'checkbox'
  checkbox.checked = doc.selected
  name.textContent = doc.name
  removeBtn.textContent = 'Remove'

  // attach all elements to the HTML list
  li.appendChild(checkbox)
  li.appendChild(name)
  li.appendChild(removeBtn)
  ul.appendChild(li)
}


export function renderMenuList () {
  const menuList = document.getElementById('menuList')
  menuList.innerHTML = ''

  axios.get('http://localhost:3000/getListOfItems')
  .then (response => {
    const jsonData = response.data
    jsonData.forEach(doc => {
      renderMenuItem(menuList, doc)
    })
  })
}
