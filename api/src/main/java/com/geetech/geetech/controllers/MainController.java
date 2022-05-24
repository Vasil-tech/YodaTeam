package com.geetech.geetech.controllers;

import com.geetech.geetech.repository.UserRepo;
import com.geetech.geetech.services.UserService;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/")
public class MainController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepo userRepo;

//    @GetMapping
//    public String main(Model model) {
//        return "index";
//    }

    @PostMapping
    public ResponseEntity send(@RequestBody String user)  {
        try {
            Object obj = new JSONParser().parse(user);
            JSONObject jo = (JSONObject) obj;
            String action = (String) jo.get("action");

            switch (action) {
                case ("Registration"):
                    String eMail = (String) jo.get("email");
                    String login = (String) jo.get("login");
                    String password = (String) jo.get("password");
                    return ResponseEntity.ok(userService.registration(eMail, login, password));
                case ("Authorisation"):
                    String auth_login = (String) jo.get("login");
                    String auth_pass = (String) jo.get("password");
                    return ResponseEntity.ok(userService.authorization(auth_login, auth_pass));
                default:
//                    sosi();
                    return ResponseEntity.ok("Sosi");
            }
        }
        catch(Exception e){
            return ResponseEntity.badRequest().body("Косяк");
        }
    }
}

//        JSONObject peronObject = JSONObject(user);
//        JSONArray person = user.JSONArray(person);
//        String action = getValuesForGivenKey( user, "type");
//        return action;
//        public List<String> getValuesForGivenKey(String jsonArrayStr, String key) {
//        JSONArray jsonArray = new JSONArray(jsonArrayStr);
//        return IntStream.range(0, jsonArray.length())
//                .mapToObj(index -> ((JSONObject)jsonArray.get(index)).optString(key))
//                .collect(Collectors.toList());

