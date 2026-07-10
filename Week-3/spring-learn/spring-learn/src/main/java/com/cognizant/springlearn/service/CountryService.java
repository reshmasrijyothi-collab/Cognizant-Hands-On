package com.cognizant.springlearn.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn.model.Country;

@Service
public class CountryService {

    private static final Logger logger = LoggerFactory.getLogger(CountryService.class);

    /**
     * Loads the country list from country.xml and returns the country whose
     * code matches the given code, case insensitively.
     */
    @SuppressWarnings("unchecked")
    public Country getCountry(String code) {
        logger.info("START - getCountry() for code: {}", code);

        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        List<Country> countryList = (List<Country>) context.getBean("countryList", List.class);

        // Lambda based case-insensitive match instead of a manual for-loop
        Optional<Country> match = countryList.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst();

        logger.info("END - getCountry()");

        return match.orElse(null);
    }
}
