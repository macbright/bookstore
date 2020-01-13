import uuidv1 from 'uuid/v1';

export const INITIAL_BOOKS = [
  { bookId: uuidv1(), title: 'Into The Wild', category: 'Biography' },
  { bookId: uuidv1(), title: 'City Of Bones', category: 'Horror' },
  { bookId: uuidv1(), title: 'Midnight In Garden', category: 'History' },
  { bookId: uuidv1(), title: 'React-Redux Tutorial', category: 'Learning' },
  { bookId: uuidv1(), title: 'Stargirl', category: 'Kids' },
  { bookId: uuidv1(), title: 'The Hunger Games', category: 'Action' },
  { bookId: uuidv1(), title: 'Brave New World', category: 'Sci-Fi' },
];

export const BOOK_CATEGORY = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
