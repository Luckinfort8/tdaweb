class Aplicacion{
  constructor(contenedorAlbum){
    this.contenedorAlbum = contenedorAlbum;
    this.fotos = [];
    this.cargarcontenedorAlbum();
  }
  cargarcontenedorAlbum(){
    for (const enlace of PHOTO_LIST) {
      const foto = new Foto(this.contenedorAlbum, enlace);
      this.fotos.push(foto);
    }
  }
}