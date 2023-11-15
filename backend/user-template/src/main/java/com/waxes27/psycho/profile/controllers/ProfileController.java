package com.waxes27.psycho.profile.controllers;

import com.waxes27.psycho.profile.models.Profile;
import com.waxes27.psycho.profile.models.enums.CommunicationMethods;
import com.waxes27.psycho.profile.models.enums.Emotion;
import com.waxes27.psycho.profile.requests.ProfileUpdateRequest;
import com.waxes27.psycho.profile.services.ProfileService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.UUID;

@RestController
@AllArgsConstructor
@RequestMapping("profile")
public class ProfileController {

    private ProfileService profileService;

    @GetMapping
    public Profile getProfile(@RequestParam("user") UUID userID){
        return profileService.getUserProfile(userID);
    }

    @PostMapping
    public Profile updateProfile(@RequestBody ProfileUpdateRequest profileUpdateRequest){
        Profile profile = new Profile(
                profileUpdateRequest.name(),
                profileUpdateRequest.age(),
                profileUpdateRequest.location(),
                profileUpdateRequest.languagePreferences(),
                Emotion.valueOf(profileUpdateRequest.emotion()),
                profileUpdateRequest.currentChallenges(),
                CommunicationMethods.valueOf(profileUpdateRequest.preferredCommunicationMethods())
        );
        return profileService.updateProfile(profile, profileUpdateRequest.userId());
    }
}
