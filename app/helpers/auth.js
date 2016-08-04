export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Justin Davidson',
        avatar: '',
        uid: 'justindavidson'
      })
    }, 2000)
  })
}

export function checkIfAuthed (store) {
  // Ignore firebase
  return store.getState().isAuthed
}

export function logout () {
  console.log('Logged Out!!')
}
