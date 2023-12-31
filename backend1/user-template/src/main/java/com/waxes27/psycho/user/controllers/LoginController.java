package com.waxes27.psycho.user.controllers;


import com.waxes27.psycho.profile.models.Profile;
import com.waxes27.psycho.user.models.User;
import com.waxes27.psycho.user.models.enums.Role;
import com.waxes27.psycho.user.requests.UserRegistrationRequest;
import com.waxes27.psycho.user.security.PasswordEncoder;
import com.waxes27.psycho.user.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
public class
LoginController {
    private AuthenticationManager authenticationManager;
    private UserService userService;
    PasswordEncoder passwordEncoder = new PasswordEncoder();
//    private final RestTemplate restTemplate;

    @CrossOrigin("http://localhost:4200")
    @PostMapping(path = "/login")
    public Object login(
            @RequestParam("username") String username,
            @RequestParam("password") String password
    ){

        JSONObject jsonObject = new JSONObject();
        System.out.println(username +" : "+password);


        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            username,password));
            System.out.println(authentication.isAuthenticated());
            SecurityContextHolder.getContext().setAuthentication(authentication);

            return authentication.getPrincipal();

        }catch (Exception e){
            return e.getMessage();
        }
    }
    @CrossOrigin("http://localhost:4200")
    @PostMapping(path = "/register")
    public User registerUser(@RequestBody UserRegistrationRequest userRegistrationRequest) throws IllegalAccessException {
        User user = new User(
                userRegistrationRequest.username(),
                userRegistrationRequest.password(),
                Role.PATIENT
        );

        user = userService.createNewUser(user);
        System.out.println(user.getProfile().getUser().getId());

        return user;
    }

}