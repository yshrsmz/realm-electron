import Realm from 'realm'

import Book from './book'

export default new Realm({ schema: [Book] })
