import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCftHfJl1WEDcH7uilPsjB50OQuCd7Jt9U",
  authDomain: "reactjs-c7801.firebaseapp.com",
  databaseURL: "https://reactjs-c7801.firebaseio.com",
  projectId: "reactjs-c7801",
  storageBucket: "reactjs-c7801.appspot.com",
  messagingSenderId: "677872967974"
})
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base
