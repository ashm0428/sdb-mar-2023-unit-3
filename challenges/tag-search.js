let library = [
    {
      title: "A Game of Thrones",
      tags: ["fantasy", "george r.r. martin"],
    },
    {
      title: "Eloquent JavaScript",
      tags: ["technology", "programming", "marijn haverbeke"],
    },
    {
      title: "The Fellowship of the Ring",
      tags: ["fantasy", "jrr tolkien"],
    },
    {
      title: "The Return of the King",
      tags: ["fantasy", "jrr tolkien"],
    },
    {
      title: "The Anthropocene Reviewed",
      tags: ["nonfiction", "john green"],
    },
    {
      title: "The Left Hand of Darkness",
      tags: ["sci-fi", "ursula le guin "],
    },
    // add more books if you would like
  ];
  
  function search(tag) {
    let taggedBooks = library.filter((book) => book.tags.includes(tag) === true);
    console.log(`The following books are in the ${tag} genre:`);
    return taggedBooks.map((book) => book.title);
  }
  
  console.log(search("fantasy"));
  console.log(search("sci-fi"));
  console.log(search("nonfiction"));
  console.log(search("technology"));
  