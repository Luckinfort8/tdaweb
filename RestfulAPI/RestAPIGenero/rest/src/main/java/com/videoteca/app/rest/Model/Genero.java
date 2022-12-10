package com.videoteca.app.rest.Model;

import javax.persistence.*;

@Entity
public class Genero {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;

    private String descripcion;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return nombre;
    }
    public void setName(String nombre) {
        this.nombre = nombre;
    }

    public String getDescription() {
        return descripcion;
    }
    public void setDescription(String descripcion) {
        this.descripcion = descripcion;
    }
}
