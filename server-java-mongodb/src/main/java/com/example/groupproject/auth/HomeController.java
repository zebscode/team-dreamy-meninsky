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
    
    @GetMapping("/register")
    public String getRegisterPage() {
    	return "register";
    }
    
    @PostMapping("/register")
    public void register(@RequestBody User newUser) {
        User foundUser = userRepository.findByUsername(newUser.getUsername());
        if(foundUser == null) {
            userService.Save(newUser);
        }
        else {
            JOptionPane.showMessageDialog(null, "Username not available");
        }
    }
}
