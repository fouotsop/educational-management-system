package com.tp.subject_service.Service;

import java.util.List;

import com.tp.subject_service.Entities.Subject;

public interface ISubject_Service {

    public void addSubject(Subject subject);
    public List<Subject> findAllSubjects();
    public Subject findsubject(String subjectId);
    public void updateSuject(String Id,Subject subject);
    public void deleteSubject(String subject);
    

}
