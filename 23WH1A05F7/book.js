
const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones.",
    cover: "https://covers.openlibrary.org/b/id/10523397-L.jpg",
    content: "This is where the full book content would go or PDF link.",
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A journey of self-discovery that touches hearts across the world.",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    content: "Another inspiring story with metaphors and meaning.",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for Focused Success in a Distracted World.",
    cover: "https://covers.openlibrary.org/b/id/8370224-L.jpg",
    content: "A guide to cultivating intense focus and productivity.",
  },
];
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getAllBooks = async () => {
  await wait(500); 
  return books;
};

export const getBookById = async (id) => {
  await wait(500);
  const book = books.find((b) => b.id === parseInt(id));
  if (!book) throw new Error("Book not found");
  return book;
};
