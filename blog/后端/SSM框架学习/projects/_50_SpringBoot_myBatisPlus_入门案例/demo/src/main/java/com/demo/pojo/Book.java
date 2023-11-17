package com.demo.pojo;


public class Book {
    Long id;
    String name;
    String author;
    String description;
    @Override
    public String toString() {
        return "Book [id=" + id + ", name=" + name + ", author=" + author + ", description=" + description + "]";
    }
    
}