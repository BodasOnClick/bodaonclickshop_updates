function calcularPrecio() {
    let base = 230;
    let precio = base;

    if (document.getElementById("tipo").value == "low-cost") precio = precio;
    if (document.getElementById("tipo").value == "basic") precio += 120;
    if (document.getElementById("tipo").value == "personalizada") precio += 470;
    if (document.getElementById("foto").checked) precio += 50;
    if (document.getElementById("comentarios").checked) precio += 100;

    document.getElementById("resultado").innerText = "Precio estimado: €" + precio;
  }

  window.onload = calcularPrecio();

  function toggleMenu() {
    const navList = document.querySelector("nav ul");
    navList.classList.toggle("show");
  }

  function mostrarDescripcion(idMostrar) {
    // Lista de todos los IDs posibles
    const descripciones = [
      'paquete1_descripcion',
      'paquete2_descripcion',
      'paquete3_descripcion',
      'extra1_descripcion',
      'extra2_descripcion'
    ];
  
    descripciones.forEach(id => {
      const elemento = document.getElementById(id);
      if (elemento) {
        // Si es el que queremos mostrar
        if (id === idMostrar) {
          elemento.style.display = 'block';
        } else {
          // Ocultamos los demás
          elemento.style.display = 'none';
        }
      }
    });
  }