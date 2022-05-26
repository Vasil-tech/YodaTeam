//package com.geetech.geetech.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//
//@Controller
//public class BlogController {
//
//    @Autowired
//    private MessageRepo messageRepo;
//
//    @GetMapping("/blog")
//    public String blogMain (Model model) {
//        Iterable<Message> posts = messageRepo.findAll();
//        model.addAttribute("posts", posts);
//        return "blog-main";
//    }
//}