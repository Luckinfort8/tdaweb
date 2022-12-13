package com.videoteca.app.rest.Controller;

import com.videoteca.app.rest.Model.Genero;
import com.videoteca.app.rest.Repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoController {
    @Autowired
    private TodoRepository todoRepository;
    @GetMapping(value = "/")
    public String holaMundo(){
        return "HOLA MUNDO!!!";
    }
    @GetMapping(value = "/genres")
    public List <Genero> getGenres(){
        return todoRepository.findAll();
    }
    @PostMapping(value = "/savegenero")
    public String saveGenero(@RequestBody Genero genero){
        todoRepository.save(genero);
        return "Genero guardado";
    }

    @PutMapping(value = "/updategenero/{id}")
    public  String updateGenero(@PathVariable Integer id, @RequestBody Genero genero){
        Genero updateGenero = todoRepository.findById(id).get();
        updateGenero.setNombre(genero.getNombre());
        updateGenero.setDescripcion(genero.getDescripcion());
        todoRepository.save(updateGenero);
        return "Genero actualizado";
    }

    @DeleteMapping(value = "/deletegenero/{id}")
    public String deleteGenero(@PathVariable Integer id){
        Genero deletedGenero = todoRepository.findById(id).get();
        todoRepository.delete(deletedGenero);
        return "Genero eliminado";
    }
}
