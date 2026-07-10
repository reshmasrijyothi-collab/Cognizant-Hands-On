package com.cognizant.springlearn;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger logger = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        logger.info("START - main() method of SpringLearnApplication");

        SpringApplication.run(SpringLearnApplication.class, args);

        // Hands on 2 - load SimpleDateFormat bean from Spring XML config
        displayDate();

        logger.info("END - main() method of SpringLearnApplication");
    }

    /**
     * Hands on 2: Spring Core - Load SimpleDateFormat from Spring Configuration XML.
     * Loads the 'dateFormat' bean defined in date-format.xml, parses a sample date
     * string and prints the result.
     */
    public static void displayDate() {
        logger.info("START - displayDate()");

        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
        SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);

        try {
            Date date = format.parse("31/12/2018");
            System.out.println("Parsed date: " + date);
        } catch (ParseException e) {
            logger.error("Failed to parse date", e);
        }

        logger.info("END - displayDate()");
    }
}
