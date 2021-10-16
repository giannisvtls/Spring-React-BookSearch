package com.webdev.book.favorites;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/")
public class FavoritesController {
    private final Repository favoritesRepo;

    public FavoritesController(Repository favoritesRepo) {
        this.favoritesRepo = favoritesRepo;
    }

    /*Get all results*/
    @CrossOrigin
    @GetMapping("/favorites")
    public List<Favorites> getAllEntries() {
        return favoritesRepo.findAll();
    }

    /*Post a new favorite*/
    @CrossOrigin
    @PostMapping("/favorites")
    public Favorites newFavorite(@RequestBody Favorites newFavorite){
        return favoritesRepo.save(newFavorite);
    }

    @CrossOrigin
    @PostMapping("/favorites/{id}")
    public Favorites editFavoriteValues(@RequestBody Favorites newFavorites, @PathVariable String id) {
        Favorites fav =  favoritesRepo.findByWorkid(id);
        if(!newFavorites.getAuthor().equals("")) fav.setAuthor(newFavorites.getAuthor());
        if(!newFavorites.getTitle().equals(""))fav.setTitle(newFavorites.getTitle());
        if(!newFavorites.getReview().equals(""))fav.setReview(newFavorites.getReview());
        return favoritesRepo.save(fav);
    }

    @CrossOrigin
    @PutMapping("/favorites/{id}/{field}")
    Favorites replaceFavoriteField(@RequestBody Favorites newFavorites, @PathVariable String id, @PathVariable String field) {
        Favorites fav =  favoritesRepo.findByWorkid(id);
        if(field.equals("author")) fav.setAuthor(newFavorites.getAuthor());
        if(field.equals("title")) fav.setTitle(newFavorites.getTitle());
        if(field.equals("review"))fav.setReview(newFavorites.getReview());
        if(field.equals("edit")){
            if(!newFavorites.getAuthor().equals("")) fav.setAuthor(newFavorites.getAuthor());
            if(!newFavorites.getTitle().equals(""))fav.setTitle(newFavorites.getTitle());
            if(!newFavorites.getReview().equals(""))fav.setReview(newFavorites.getReview());
        }
        return favoritesRepo.save(fav);
    }

    /*Delete a whole object in the DB */
    @CrossOrigin
    @DeleteMapping("/favorites/{id}")
    void deleteFavorite(@PathVariable String id) {
        favoritesRepo.deleteByWorkid(id);
    }
}
