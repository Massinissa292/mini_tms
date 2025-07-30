package mini_tms;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import mini_tms.model.Conducteur;
import mini_tms.model.Trajet;

@RestController
public class HelloController {

    @GetMapping("hello")
    public String hello() {
        return "Bonjour bbiw";
    }

    }

