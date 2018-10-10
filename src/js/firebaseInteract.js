
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from '../auth/firebaseAuth'


// set up firebase config - sensitive information - auth key.
//    actual info stored in another file not committed to git
// const config = {
//   apiKey: "....",
//   authDomain: "your-project-name.firebaseapp.com",
//   databaseURL: "https://your-project-name.firebaseio.com",
//   projectId: "your-project-id",
//   storageBucket: "your-project-name.appspot.com",
//   messagingSenderId: ""
// }
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

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
