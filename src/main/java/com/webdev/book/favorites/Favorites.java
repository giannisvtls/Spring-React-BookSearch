package com.webdev.book.favorites;

import org.springframework.data.annotation.Id;

public class Favorites {

    @Id
    private String id;

    private String workid;
    private String author;
    private String title;
    private String review;

    public Favorites() {}

    public Favorites(String id, String workid, String author, String title) {
        this.id = id;
        this.workid = workid;
        this.author = author;
        this.title = title;
    }

    public Favorites(String id, String workid, String author, String title, String review) {
        this.id = id;
        this.workid = workid;
        this.author = author;
        this.title = title;
        this.review = review;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getWorkid() {
        return workid;
    }

    public void setWorkid(String workid) {
        this.workid = workid;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    @Override
    public String toString() {
        return "Favorites{" +
                "id='" + id + '\'' +
                ", workid='" + workid + '\'' +
                ", author='" + author + '\'' +
                ", title='" + title + '\'' +
                '}';
    }
}
