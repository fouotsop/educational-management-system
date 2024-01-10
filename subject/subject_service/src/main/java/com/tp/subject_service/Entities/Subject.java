package com.tp.subject_service.Entities;

import java.util.UUID;

import com.tp.subject_service.Enums.Optional;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder @Setter @Getter @ToString
public class Subject {
    
    private String id = UUID.randomUUID().toString();
    private String title;
    private String content;
    //partant du principe qu'une matière peut etre optionnelle,fondamentale ou complementaire
    private Optional optional;
    
}
