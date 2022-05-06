package com.geetech.geetech.controllers;

import com.geetech.geetech.domain.Message;
import com.geetech.geetech.repository.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class RemoveController {
    @Autowired
    private MessageRepo messageRepo;

    @PostMapping("/blog/{id}/remove")
    public String blogPostDelete (@PathVariable(value = "id") Integer id, Model model) {
        Message post = messageRepo.findById(id).orElseThrow();
        messageRepo.delete(post);
        return "redirect:/blog";
    }
}