package com.waxes27.psycho.user.repository;

import com.waxes27.psycho.profile.models.Profile;
import com.waxes27.psycho.user.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByUsername(String username);

    @Override
    Optional<User> findById(UUID uuid);
}