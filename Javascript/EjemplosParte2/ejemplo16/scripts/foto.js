class Foto{
  constructor(containerElement, fotoSrc){
    this.containerElement = containerElement;
    this.abrirImagen = this.abrirImagen.bind(this);
    this.cerrarImagen = this.cerrarImagen.bind(this);
    this.siguiente = this.siguiente.bind(this);
    this.currentIndex = null;

    this.image = document.createElement('img');
    this.image.src = fotoSrc;
    this.image.addEventListener('click', this.abrirImagen);
    this.containerElement.appendChild(this.image);
  }
  createImage(src){
    this.foto =  document.createElement('img');
    this.foto.src = src;
    return this.foto;
  }

  abrirImagen(event){
    this.images = this.createImage(event.currentTarget.src);
    this.modalView = document.querySelector('#modal-view');
    this.modalView.appendChild(this.images);
    document.body.classList.add('no-scroll');
    this.modalView.style.top = window.pageYOffset + 'px';
    this.modalView.classList.remove('hidden');
    this.modalView.addEventListener('click', this.cerrarImagen);
    document.addEventListener('keydown',this.siguiente);
  }
  cerrarImagen(){
    document.body.classList.remove('no-scroll');
    this.modalView.classList.add('hidden');
    this.modalView.innerHTML = '';
    document.removeEventListener('keydown', this.siguiente);
  }

  siguiente(event){
    if (event.key === 'Escape') {
      this.cerrarImagen();
      return; 
    }
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
      return;
    }
    this.nextIndex = this.currentIndex;
    if (event.key === 'ArrowLeft') {
      this.nextIndex--;
    }else {
      this.nextIndex++;
    }
    if (this.nextIndex < 0 || this.nextIndex == PHOTO_LIST.length) {
      return;
    }
    this.photoSrc = PHOTO_LIST[this.nextIndex];
    this.modalView.innerHTML = '';
    this.imagen = this.createImage(this.photoSrc);
    this.modalView.appendChild(this.imagen);
    this.currentIndex = this.nextIndex;
  }
  
}