package com.geetech.geetech.services;

import com.geetech.geetech.domain.UserEntity;
import com.geetech.geetech.exception.Access;
import com.geetech.geetech.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    //Подключение к бд
//    private static Connection con;
//    private static Statement stmt;
//    private static ResultSet rs;

    @Autowired
    private UserRepo userRepo;

    public Object registration(String eMail, String login, String password) {
        UserEntity guest = new UserEntity(eMail, login, password);
        Access accessOK = new Access(login);

        if (userRepo.findByeMail(guest.geteMail()) != null) {
            accessOK.setBiba("Не удалось зарегистрироваться");
            accessOK.setAccess(false);
            return accessOK;
        }
        if (userRepo.findByLogin(guest.getLogin()) != null) {
            accessOK.setBiba("Не удалось зарегистрироваться");
            accessOK.setAccess(false);
            return accessOK;
        }
        accessOK.setBiba("Регистрация прошла успешно");
        accessOK.setAccess(true);
        userRepo.save(guest);
        return accessOK;
    }

    public Object authorization(String login, String password) {
        UserEntity usver = new UserEntity(login, password);
        Access accessOK = new Access(login);

        if (userRepo.findByLogin(usver.getLogin()) == null) {
            accessOK.setBiba("Авторизация не прошла");
            accessOK.setAccess(false);
            return accessOK;
        }
        if ((userRepo.findByLogin(usver.getLogin()) != null) && (userRepo.findByPassword(usver.getPassword()) == null)) {
            accessOK.setBiba("Авторизация не прошла");
            accessOK.setAccess(false);
            return accessOK;
        }
        if ((userRepo.findByLogin(usver.getLogin()) == null) && (userRepo.findByPassword(usver.getPassword()) == null)) {
            accessOK.setBiba("Авторизация не прошла");
            accessOK.setAccess(false);
            return accessOK;
        }
        accessOK.setBiba("Авторизация прошла успешно");
        accessOK.setAccess(true);
        return accessOK;
    }
}
