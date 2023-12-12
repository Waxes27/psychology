package com.waxes27.psycho.profile.requests;

import com.waxes27.psycho.profile.models.enums.CommunicationMethods;
import com.waxes27.psycho.profile.models.enums.Emotion;

import java.util.UUID;

public record ProfileUpdateRequest(
        UUID userId,
        String name,
        int age,
        String location,
        String languagePreferences,
        String emotion,
        String currentChallenges,
        String preferredCommunicationMethods

) {
}
