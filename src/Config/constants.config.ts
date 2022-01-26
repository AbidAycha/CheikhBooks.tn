export const CONSTANTS = {
  apis: {
    books: {
      getBooksByCategory: 'http://localhost:3000/books',
      searchBookByTitleOrAuthor: 'http://localhost:3000/books/search',
    },
    auth: {
      login: 'http://localhost:3000/auth/login',
      register: 'http://localhost:3000/auth/register',
    },
    users : {
      getUsers : 'http://localhost:3000/users/all',
      getUser : 'http://localhost:3000/users',
    },
    orders : {
      getOrders : 'http://localhost:3000/orders/all',
    }
  },
};
