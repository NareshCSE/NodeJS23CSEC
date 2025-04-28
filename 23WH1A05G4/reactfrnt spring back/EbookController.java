@RestController
@RequestMapping("/ebooks")
public class EbookController {
    @Autowired
    private EbookService ebookService;

    @GetMapping
    public List<Ebook> getAllEbooks() {
        return ebookService.getAllEbooks();
    }

    @PostMapping
    public Ebook addEbook(@RequestBody Ebook ebook) {
        return ebookService.addEbook(ebook);
    }
}
