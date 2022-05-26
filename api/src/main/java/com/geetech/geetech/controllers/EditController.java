//package com.geetech.geetech.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//
//import java.util.ArrayList;
//import java.util.Optional;
//
//@Controller
//public class EditController {
//    @Autowired
//    private MessageRepo messageRepo;
//
//    @GetMapping("/blog/{id}/edit")
//    public String blogEdit (@PathVariable(value = "id") Integer id, Model model) {
//        if (!messageRepo.existsById(id)) {
//            return "redirect:/blog";
//        }
//        Optional<Message> post = messageRepo.findById(id);
//        ArrayList<Message> res = new ArrayList<>();
//        post.ifPresent(res::add);
//        model.addAttribute("post", res);
//        return "blog-edit";
//    }
//
//    @PostMapping("/blog/{id}/edit")
//    public String blogPostUpdate (@PathVariable(value = "id") Integer id, @RequestParam String tittle, @RequestParam String anons, @RequestParam String text, Model model) {
//        Message post = messageRepo.findById(id).orElseThrow();
//        post.setTittle(tittle);
//        post.setAnons(anons);
//        post.setText(text);
//        messageRepo.save(post);
//        return "redirect:/blog";
//    }
//}
