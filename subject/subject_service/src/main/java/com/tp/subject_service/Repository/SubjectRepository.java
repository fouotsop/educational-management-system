package com.tp.subject_service.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tp.subject_service.Entities.Subject;

@Repository
public interface SubjectRepository extends JpaRepository<Subject,String>{
    
}
