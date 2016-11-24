import realm from './data/realm'

import Book from './data/book'

class Main {

  constructor() {
    console.log("init Main")
    realm.objects('Book')
      .addListener((books, changes) => {
        changes.insertions.forEach((index) => {
          let book = books[index]
          console.log(`new book added: ${book.title} - ${book.author}`)
        })
      })
  }

  static initialize(args = {}) {
    if (!!Main.INSTANCE) {
      throw new Error('must be called once')
    }
    console.log("Main#initialize")

    Main.INSTANCE = new Main()
  }
}

export default Main
