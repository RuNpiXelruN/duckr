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
