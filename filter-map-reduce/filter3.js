const books = [
      { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
      { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
      { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
      // ... more books
  ];

const userBooks = books.filter( (bk) => bk.genre=='History')

console.log(userBooks);

const userBooks1 = books.filter( (bk) => bk.edition >= 2000)
console.log(userBooks1);


userBooks2 = books.filter((bk) => {
      return bk.publish >= 1995 && bk.genre === "History";
  });
  console.log(userBooks2);
  



