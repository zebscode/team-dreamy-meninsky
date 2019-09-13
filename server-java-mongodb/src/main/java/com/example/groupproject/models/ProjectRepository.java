package com.example.groupproject.models;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, String> {

}
/*Changed back to jpa repo for mySQL databases*/