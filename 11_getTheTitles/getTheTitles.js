
  const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];
  const getTheTitles = function() {

    let newArray = [];

    newArray.push(books[0].title)
    newArray.push(books[1].title);
    
        return newArray;

};
console.log(typeof(getTheTitles(books)));
// Do not edit below this line
module.exports = getTheTitles;
