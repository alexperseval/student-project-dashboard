package pji.projet.Etatdesprojets;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.RestController;

/**
 * Main class starting the Spring server.
 * 
 * @author Tanguy Debacker - Alexandre Perseval
 *
 */
@SpringBootApplication
@RestController
public class EtatDesProjetsApplication extends SpringBootServletInitializer {

	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(EtatDesProjetsApplication.class);
    }
	
	public static void main(String[] args) {
		SpringApplication.run(EtatDesProjetsApplication.class, args);
	}

}