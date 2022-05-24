package com.geetech.geetech.repository;

import com.geetech.geetech.domain.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<UserEntity, Integer> {
    UserEntity findByLogin(String login);
    UserEntity findByeMail(String eMail);
    UserEntity findByPassword(String password);
}
