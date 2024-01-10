package com.tp.subject_service.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tp.subject_service.Entities.Subject;
import com.tp.subject_service.Repository.SubjectRepository;

@Service
public class Subject_service_impl implements ISubject_Service {

    private SubjectRepository subjectRepository;

    //injection de dépendance
    public Subject_service_impl(SubjectRepository subjectRepository){

        this.subjectRepository=subjectRepository;

    }

    @Override
    public void addSubject(Subject subject) {
        subjectRepository.save(subject);
        
    }

    @Override
    public List<Subject> findAllSubjects() {
       return subjectRepository.findAll();
    }


    public Subject findsubject(String subjectId) {
       return subjectRepository.findById(subjectId).get();
    }

    @Override
    public void updateSuject(String Id, Subject subject) {
        Subject subjectTemplate= findsubject(Id);
        subjectTemplate.setNoteId(subject.getNoteId());
        subjectTemplate.setContent(subject.getContent());
        subjectTemplate.setTitle(subject.getTitle());
        addSubject(subjectTemplate);

    }

    @Override
    public void deleteSubject(String subject) {
       subjectRepository.deleteById(subject);
    }

    

    
}
