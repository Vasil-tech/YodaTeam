package com.geetech.geetech.repository;

import com.geetech.geetech.domain.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageRepo extends CrudRepository<Message, Integer> {

}
