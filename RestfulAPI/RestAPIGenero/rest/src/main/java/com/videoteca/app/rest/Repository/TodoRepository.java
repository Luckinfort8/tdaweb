package com.videoteca.app.rest.Repository;

import com.videoteca.app.rest.Model.Genero;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Genero, Integer> {
}
