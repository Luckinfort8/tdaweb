let imagenes = document.querySelectorAll(".pintura");

for (let i = 0; i < imagenes.length; i++) {

  imagenes[i].onmouseover = function() {

    let newNode = document.createElement("img");
    const parts=this.src.split("images");

    newNode.src="images" + parts[parts.length-1];
    newNode.className='zoom';

    this.parentNode.appendChild(newNode);

  }

  imagenes[i].onmouseout = function(){

    imagenes = document.querySelectorAll(".zoom");

    for (let i=0; i < imagenes.length; i++){
      imagenes[i].parentNode.removeChild(imagenes[i]);
    }
    
  }
}
