
import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyA4sKPiPmYcdDlPmJ__b2_DNDQts4AvVRU",
  authDomain: "express-server-ajax.firebaseapp.com",
  databaseURL: "https://express-server-ajax.firebaseio.com",
  projectId: "express-server-ajax",
  storageBucket: "express-server-ajax.appspot.com",
  messagingSenderId: "234464160863"
}
firebase.initializeApp(config)

// Initialize firestore database
const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

function renderMenuList (ul, doc) {
  let li = document.createElement('li')
  let name = document.createElement('span')
  let removeBtn = document.createElement('button')

  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = doc.data().selected

  li.setAttribute('data-id', doc.id)
  name.textContent = doc.data().menuItem
  removeBtn.textContent = 'Remove'

  li.appendChild(checkbox)
  li.appendChild(name)
  li.appendChild(removeBtn)

  ul.appendChild(li)
}

export default function logData () {
  const menuList = document.getElementById('menuList')
  db.collection('mealPlanner').get()
  .then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.id)
      console.log(doc.data())
      renderMenuList(menuList, doc)
    })
  })
}
