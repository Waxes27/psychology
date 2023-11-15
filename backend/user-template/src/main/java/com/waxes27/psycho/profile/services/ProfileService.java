package com.waxes27.psycho.profile.services;


import com.waxes27.psycho.profile.models.Profile;
import com.waxes27.psycho.profile.repository.ProfileRepository;
import com.waxes27.psycho.user.models.User;
import com.waxes27.psycho.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@AllArgsConstructor
public class ProfileService {

    private final ProfileRepository profileRepository;
    private final UserRepository userRepository;


    public Profile getUserProfile(UUID userId){
        User user = userRepository.findById(userId).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return profileRepository.findByUser_Id(user.getId()).get();
    }

    public Profile updateProfile(Profile profile, UUID userId){
        User user = userRepository.findById(userId).get();
        profile.setUser(user);
        user.setProfile(profile);
        userRepository.updateProfileById(profile,userId);
        return profile;
    }
}
