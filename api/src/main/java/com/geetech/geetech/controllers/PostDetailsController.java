package com.geetech.geetech.controllers;

import com.geetech.geetech.domain.Message;
import com.geetech.geetech.repository.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.Optional;

@Controller
public class PostDetailsController {
    @Autowired
    private MessageRepo messageRepo;

    @GetMapping("/blog/{id}")
    public String blogDetails (@PathVariable(value = "id") Integer id, Model model) {
        if (!messageRepo.existsById(id)) {
            return "redirect:/blog";
        }
        Optional<Message> post = messageRepo.findById(id);
        ArrayList<Message> res = new ArrayList<>();
        post.ifPresent(res::add);
        model.addAttribute("post", res);
        return "blog-details";
    }
}