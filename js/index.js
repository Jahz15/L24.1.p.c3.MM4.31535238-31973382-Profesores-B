let profesores = [
    { categoria: 2, nombre: "Carla", sexo: "F" },
    { categoria: 5, nombre: "Samuel", sexo: "M" },
    { categoria: 3, nombre: "Alejandro", sexo: "M" },
    { categoria: 1, nombre: "Maria", sexo: "F" },
    { categoria: 2, nombre: "Carmen", sexo: "F" },
    { categoria: 2, nombre: "Marco", sexo: "M" },
    { categoria: 4, nombre: "Marisela", sexo: "F" },
  ];
  
  let profesoresCategoria = (profesores, categoria) => {
      let profesoresFiltrados= [ ];
      profesores.forEach((profesor) => {
          if (profesor.categoria == categoria) profesoresFiltrados.push(profesor);
      });
      return profesoresFiltrados;
  };
  
  let porcProfesSexoEnCategoria = (profesores, categoria, sexo) => {
      let profesoresFiltrados = profesoresCategoria(profesores, categoria);
      let contador = 0;
      profesoresFiltrados.forEach((profesor) => {
          if (profesor.sexo == sexo) contador++;
      });
      return ((contador / profesoresFiltrados.length) * 100).toFixed(2);
  };
  
  let salida = document.getElementById("salida");
  
  let profesoresFiltrados = profesoresCategoria(profesores, 2);
  let porcentaje = porcProfesSexoEnCategoria(profesoresFiltrados, 2, "M");
  salida.innerHTML = `El porcentaje de profesores de sexo M en la categoría 2 es del ${porcentaje}%`;