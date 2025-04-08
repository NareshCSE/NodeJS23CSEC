package com.example.ebookapp.service;

import com.example.ebookapp.model.Ebook;
import com.example.ebookapp.repository.EbookRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EbookService {
    private final EbookRepository repository;

    public EbookService(EbookRepository repository) {
        this.repository = repository;
    }

    public List<Ebook> getAll() {
        return repository.findAll();
    }

    public Ebook getById(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("eBook not found"));
    }

    public Ebook addEbook(Ebook ebook) {
        return repository.save(ebook);
    }

    public Ebook updateEbook(Long id, Ebook details) {
        Ebook ebook = getById(id);
        ebook.setTitle(details.getTitle());
        ebook.setAuthor(details.getAuthor());
        ebook.setGenre(details.getGenre());
        ebook.setPages(details.getPages());
        return repository.save(ebook);
    }

    public void deleteEbook(Long id) {
        repository.deleteById(id);
    }
}
