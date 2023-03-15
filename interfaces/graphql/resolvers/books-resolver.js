import { books } from "../../../infrastructure/book-repository.js";

const booksResolver = {
  Query: {
    books: () => books,
  },
};

export { booksResolver };
