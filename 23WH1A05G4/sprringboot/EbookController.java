package com.example.ebookapp.controller;

import com.example.ebookapp.model.Ebook;
import com.example.ebookapp.service.EbookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ebooks")
public class EbookController {

    private final EbookService service;

    public EbookController(EbookService service) {
        this.service = service;
    }

    @GetMapping
    public List<Ebook> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Ebook getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public Ebook create(@RequestBody Ebook ebook) {
        return service.addEbook(ebook);
    }

    @PutMapping("/{id}")
    public Ebook update(@PathVariable Long id, @RequestBody Ebook ebook) {
        return service.updateEbook(id, ebook);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteEbook(id);
    }
}
