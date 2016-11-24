import realm from '../main/data/realm'

console.log("this is renderer.js")

realm.write(() => {
  let book = realm.create('Book', {
    author: 'john smith',
    title: 'weired tale',
    publishedAt: 2000
  })
})
