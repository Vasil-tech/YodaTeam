package com.geetech.geetech.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("tittle", "Главная страница");
        return "index";
    }
    @PostMapping("/")
    public String blogAddMain (@RequestParam String eMail, @RequestParam String login, @RequestParam String password, Model model) {
        User post = new User(eMail, login, password);
        userRepo.save(post);
        return "index";
    }
}
