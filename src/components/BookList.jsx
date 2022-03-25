import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const DUMMYDATA = [
    {
      id: 1,
      title: 'Flutter Tuotrials',
      author: 'Flutter Author',
      category: 'Computer Science',
    },
    {
      id: 2,
      title: 'Micro Finance',
      author: 'Robert',
      category: 'Economics',
    },
    {
      id: 3,
      title: 'Computer Fundamentals',
      author: 'Hassan',
      category: 'Computer',
    },
  ];

  return (
    <div>
      <ul>
        {DUMMYDATA.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;