package com.waxes27.psycho.user.controllers.profile;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("profile")
public class ProfileController {
    @GetMapping
    public void getProfile(){

    }

    @PostMapping
    public void updateProfile(){

    }
}
