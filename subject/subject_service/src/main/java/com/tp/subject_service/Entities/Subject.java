package com.tp.subject_service.Entities;

import java.util.UUID;

import com.tp.subject_service.Enums.Optional;
import com.tp.subject_service.Model.Note;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
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
    @Id
    private String id = UUID.randomUUID().toString();
    private String title;
    private String content;
    @Enumerated(EnumType.STRING)//partant du principe qu'une matière peut etre optionnelle,fondamentale ou complementaire
    private Optional optional;
    @Transient
    private Note note;
    private  String NoteId;
}
