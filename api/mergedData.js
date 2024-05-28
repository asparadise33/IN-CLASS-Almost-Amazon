// for merged promises
import { getSingleBook } from './bookData';
import { getAuthorBooks, getSingleAuthor } from './authorData';

// TODO: Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleBook(firebaseKey).then((bookObject) => { // returns single book object
    getSingleAuthor(bookObject.author_id) // we nest this promise so that we can use the book object
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);

  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});
const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey).then((authorObject) => {
    getAuthorBooks(authorObject.author_id)
      .then((bookObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
});

export { getBookDetails, getAuthorDetails };
