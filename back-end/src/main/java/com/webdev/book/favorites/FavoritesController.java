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

    /*Edit a field of a certain object in the DB */
    @CrossOrigin
    @PutMapping("/favorites/{id}")
    Favorites replaceFavorite(@RequestBody Favorites newFavorites, @PathVariable String id) {

        return favoritesRepo.findById(id)
                .map(fav -> {
                    fav.setAuthor(newFavorites.getAuthor());
                    fav.setTitle(newFavorites.getTitle());
                    fav.setWorkid(newFavorites.getId());
                    return favoritesRepo.save(fav);
                })
                .orElseGet(() -> {
                    newFavorites.setId(id);
                    return favoritesRepo.save(newFavorites);
                });
    }

    @CrossOrigin
    @PutMapping("/favorites/{id}/{field}")
    Favorites replaceFavoriteField(@RequestBody Favorites newFavorites, @PathVariable String id,@PathVariable String field) {
        return favoritesRepo.findById(id)
                .map(fav -> {
                    if(field.equals("author")) fav.setAuthor(newFavorites.getAuthor());
                    if(field.equals("title")) fav.setTitle(newFavorites.getTitle());
                    if(field.equals("review")) fav.setReview(newFavorites.getReview());

                    return favoritesRepo.save(fav);
                })
                .orElseGet(() -> {
                    newFavorites.setId(id);
                    return favoritesRepo.save(newFavorites);
                });
    }

    /*Delete a whole object in the DB */
    @CrossOrigin
    @DeleteMapping("/favorites/{id}")
    void deleteFavorite(@PathVariable String id) {
        favoritesRepo.deleteById(id);
    }

    /*Delete a whole object in the DB */
    @CrossOrigin
    @DeleteMapping("/favorites/{id}/{field}")
    Favorites deleteFavoriteField(@RequestBody Favorites newFavorites, @PathVariable String id,@PathVariable String field) {
        return favoritesRepo.findById(id)
                .map(fav -> {
                    if(field.equals("author")) fav.setAuthor("");
                    if(field.equals("title")) fav.setTitle("");
                    if(field.equals("review")) fav.setReview("");

                    return favoritesRepo.save(fav);
                })
                .orElseGet(() -> {
                    newFavorites.setId(id);
                    return favoritesRepo.save(newFavorites);
                });
    }
}
