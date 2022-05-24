package com.geetech.geetech;

    import org.springframework.boot.CommandLineRunner;
    import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
    import org.springframework.boot.json.JsonParser;
    import org.springframework.boot.json.JsonParserFactory;
    import org.springframework.context.ApplicationContext;
    import org.springframework.context.annotation.Bean;
    import org.springframework.web.client.RestTemplate;

    import java.util.Map;

@SpringBootApplication
public class ServingWebContentApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServingWebContentApplication.class, args);
    }
}
