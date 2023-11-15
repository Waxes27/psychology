package com.waxes27.psycho.profile.repository;

import com.waxes27.psycho.profile.models.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
    @Transactional
    @Modifying
    @Query("update Profile p set p.name = ?1 where p.id = ?2")
    int updateNameById(String name, Long id);
    Optional<Profile> findByUser_Id(UUID id);
}
