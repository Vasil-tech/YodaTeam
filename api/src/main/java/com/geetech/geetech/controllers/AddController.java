package com.geetech.geetech.controllers;

import com.geetech.geetech.domain.Message;
import com.geetech.geetech.repository.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AddController {

    @Autowired
    private MessageRepo messageRepo;

    @GetMapping("/blog/add")
    public String blogMain (Model model) {
        return "blog-add";
    }
    @PostMapping ("/blog/add")
    public String blogAddMain (@RequestParam String tittle, @RequestParam String anons, @RequestParam String text, Model model) {
        Message post = new Message(tittle, anons, text);
        messageRepo.save(post);
        return "redirect:/blog";
    }
}
