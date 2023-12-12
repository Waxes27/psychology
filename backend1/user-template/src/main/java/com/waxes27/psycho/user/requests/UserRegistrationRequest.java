package com.waxes27.psycho.user.requests;

public record UserRegistrationRequest(
        String username,
        String password
) {
}
