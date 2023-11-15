package com.waxes27.psycho.user.models.profile;


import com.waxes27.psycho.user.models.enums.Emotion;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Entity
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
/**
 * Collect essential user information, such as name, age, location, and language preferences.
 * Allow users to create a profile with additional information related to their mental health, such as their current emotional state, any specific challenges they're facing, and their preferred communication methods (text, audio, video).
 */
public class Profile {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String name;
    private int age;
    private String location;
    private String languagePreferences;
    private Emotion emotion;
    private String currentChallenges;


}
