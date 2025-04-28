import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/books")
public class BookController {

    List<Book> books = new ArrayList<>();

    public BookController() {
        Book b1 = new Book(); b1.setId(1); b1.setTitle("Harry Potter"); b1.setAuthor("Rowling");
        Book b2 = new Book(); b2.setId(2); b2.setTitle("LOTR"); b2.setAuthor("Tolkien");
        books.add(b1);
        books.add(b2);
    }

    // I) GET all books
    @GetMapping
    public List<Book> getAllBooks() {
        return books;
    }

    // II) GET book by id
    @GetMapping("/{id}")
    public Book getBook(@PathVariable int id) {
        for (Book b : books) {
            if (b.getId() == id) return b;
        }
        return null;
    }

    // III) POST - Add book
    @PostMapping
    public String addBook(@RequestBody Book b) {
        books.add(b);
        return "Book added";
    }

    // III) PUT - Update book
    @PutMapping("/{id}")
    public String updateBook(@PathVariable int id, @RequestBody Book newBook) {
        for (Book b : books) {
            if (b.getId() == id) {
                b.setTitle(newBook.getTitle());
                b.setAuthor(newBook.getAuthor());
                return "Book updated";
            }
        }
        return "Book not found";
    }

    // III) DELETE - Delete book
    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable int id) {
        books.removeIf(b -> b.getId() == id);
        return "Book deleted";
    }
}
