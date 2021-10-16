package com.webdev.book.favorites;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface Repository extends MongoRepository<Favorites, String>{

    void deleteByWorkid(String workid);

    Favorites findByWorkid(String workid);

    //public List<Favorites> findByTitle(String title);
}
