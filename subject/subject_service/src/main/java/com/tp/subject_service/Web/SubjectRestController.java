package com.tp.subject_service.Web;


import java.rmi.ServerException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tp.subject_service.Entities.Subject;
import com.tp.subject_service.Service.ISubject_Service;

import io.micrometer.core.ipc.http.HttpSender.Response;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class SubjectRestController {

    private ISubject_Service service;

    public SubjectRestController (ISubject_Service iSubject_Service){
        this.service=iSubject_Service;
    }

    @GetMapping("/subjects")
    public List<Subject> Allsubjects(){
        return service.findAllSubjects();
    }

    @GetMapping("/subject/{id}")
    public Subject getSubject(@PathVariable("id") String id) {
        return service.findsubject(id);
    }

    @PostMapping("/subject")
    public ResponseEntity<Subject> create(@RequestBody Subject subject) throws ServerException {
    if (subject == null) {
        throw new ServerException("hum");
    } else {service.addSubject(subject);
        return new ResponseEntity<>(subject, HttpStatus.CREATED);
    }
}

    //@PutMapping


    
    
    
}
