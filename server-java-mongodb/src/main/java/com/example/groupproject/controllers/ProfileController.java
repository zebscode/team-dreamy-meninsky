package com.example.groupproject.controllers;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.groupproject.models.Profile;
import com.example.groupproject.models.ProfileRepository;

@RestController
@CrossOrigin(origins = "http://192.168.1.105:8081")
public class ProfileController {

	@Autowired
	ProfileRepository profileRepository;

	// this is a sample method that will retrieve the authenticated user name
	@GetMapping("/username")
	public String getProfile(Principal principal, Authentication authentication) {
		return principal.getName();
	}

	@GetMapping("/profile")
	public List<Profile> getProfiles() {
		List<Profile> foundProfiles = profileRepository.findAll();
		return foundProfiles;
	}

	@GetMapping("/profile/{id}")
	public ResponseEntity<Profile> getProfile(@PathVariable(value = "id") Integer id) {
		Profile foundProfile = profileRepository.findById(id).orElse(null);

		if (foundProfile == null) {
			return ResponseEntity.notFound().header("Message", "No profile with that ID has been found").build();
		}
		return ResponseEntity.ok(foundProfile);
	}

	@PostMapping("/profile")
	public ResponseEntity<Profile> postProfile(@RequestBody Profile profile) {
		Profile createdProfile = profileRepository.save(profile);
		return ResponseEntity.ok(createdProfile);
	}

	@DeleteMapping("/profile/{id}")
	public ResponseEntity<Profile> deleteProfile(@PathVariable(value = "id") Integer id) {
		Profile foundProfile = profileRepository.findById(id).orElse(null);
		if (foundProfile == null) {
			return ResponseEntity.notFound().header("Message", "No profile with that ID has been found").build();
		} else {
			profileRepository.delete(foundProfile);
		}
		return ResponseEntity.ok().build();
	}

	@PutMapping("/profile/{id}")
	public ResponseEntity<Profile> updateProfile(@PathVariable(value = "id") Integer id, @RequestBody Profile profile) {
		Profile foundProfile = profileRepository.findById(id).orElse(null);
		foundProfile.setFirstName(profile.getFirstName());
		foundProfile.setLastName(profile.getLastName());
		foundProfile.setEducation(profile.getEducation());
		foundProfile.setLocation(profile.getLocation());
		foundProfile.setAboutMe(profile.getAboutMe());
		profileRepository.save(foundProfile);
		return ResponseEntity.ok(foundProfile);
	}

}
