package com.webdev.book.favorites;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface Repository extends MongoRepository<Favorites, String>{

    void deleteByWorkid(String workid);

    //public List<Favorites> findByAuthor(String author);

    //public List<Favorites> findByTitle(String title);
}
