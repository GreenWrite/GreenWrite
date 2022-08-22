package com.greenwrite.UserAuthentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class UserAuthenticationController {

	@Autowired
	private UserAuthenticationService userAuthenticationService;
	
	@GetMapping("/test")
	public ResponseEntity<String> hello() {
		return ResponseEntity.ok("hello");
	}
	
}
