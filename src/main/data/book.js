class Book { }
Book.schema = {
  name: 'Book',
  properties: {
    author: 'string',
    title: 'string',
    publishedAt: 'int'
  }
}

export default Book
