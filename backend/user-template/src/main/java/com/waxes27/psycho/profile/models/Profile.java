package com.waxes27.psycho.profile.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.waxes27.psycho.profile.models.enums.CommunicationMethods;
import com.waxes27.psycho.profile.models.enums.Emotion;
import com.waxes27.psycho.user.models.User;
import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
/**
 * Collect essential user information, such as name, age, location, and language preferences.
 * Allow users to create a profile with additional information related to their mental health, such as their current emotional state, any specific challenges they're facing, and their preferred communication methods (text, audio, video).
 */
@ToString
public class Profile {

    public Profile(User user){
        this.user = user;
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    @JsonIgnore
    private Long id;
    private String name;
    private int age;
    private String location;
    private String languagePreferences;
    private Emotion emotion;
    private String currentChallenges;
    private CommunicationMethods preferredCommunicationMethods;


    @OneToOne(cascade = CascadeType.ALL, optional = false, orphanRemoval = true)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    @JsonIgnore
    private User user;

    public Profile(String name, int age, String location, String languagePreferences, Emotion emotion, String currentChallenges, CommunicationMethods preferredCommunicationMethods) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.languagePreferences = languagePreferences;
        this.emotion = emotion;
        this.currentChallenges = currentChallenges;
        this.preferredCommunicationMethods = preferredCommunicationMethods;
    }
}
