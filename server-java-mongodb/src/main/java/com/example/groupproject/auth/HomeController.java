package com.example.groupproject.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MySQLUserDetailsService userService;
	
//    @GetMapping("/")
//    public String getHomePage() {
//        return "home";
//    }
//
//    @GetMapping("/secure")
//    public String getSecurePage() {
//        return "secure";
//    }
//
//    @GetMapping("/login")
//    public String getLoginPage() {
//        return "login";
//    }
    
    @GetMapping("/register")
    public String getRegisterPage() {
    	return "register";
    }
    
    @PostMapping("/register")
    public void register(@RequestBody User newUser) {
    	userService.Save(newUser);
    }
    
//    @PostMapping("/register")
//    public String createUser(@RequestParam("username") String username, @RequestParam("password") String password, Model model) {
//    	User foundUser = userRepository.findByUsername(username);
//    	if (foundUser == null) {
//    		User newUser = new User();
//    		newUser.setUsername(username);
//    		newUser.setPassword(password);
//    		userService.Save(newUser);
//    		return "login";
//    	}
//    	else {
//    		model.addAttribute("exists", true);
//    		return "register";
//    	}
//    }
}