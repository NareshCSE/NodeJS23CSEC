@Service
public class EbookService {
    @Autowired
    private EbookRepository ebookRepository;

    public List<Ebook> getAllEbooks() {
        return ebookRepository.findAll();
    }

    public Ebook addEbook(Ebook ebook) {
        return ebookRepository.save(ebook);
    }
}
E
