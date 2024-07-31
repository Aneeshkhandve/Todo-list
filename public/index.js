import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
];

app.use(express.static(path.join(__dirname, 'public')));

app.get("/books",(req,res) =>{
  res.json(books);
});

app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };
  books.push(newBook);
  res.json(newBook);
});

app.put("/books/:id",(req,res)=>{
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;

  books = books.map((book) => (book.id === bookId ? updatedBook : book));

  res.json(updatedBook);
});

app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);

  books = books.filter((book) => book.id !== bookId);

  res.json({ message: 'Book deleted successfully' });
});

app.get('/add-book', (req, res) => {
  res.sendFile(path.join(__dirname,'/add-book.html'));
});



app.listen(port, ()=>{
  console.log(`Server listening on port ${port}`);
  console.log(__dirname);
});

