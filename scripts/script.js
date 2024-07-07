// const root = document.getElementById("root");
// const url = 'https://api.estadisticasbcra.com/usd_of'

// const cotizacionUs = async () => {
//     resp = await fetch(url, {
//   headers: {
//     Authorization: "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTA3MDUyNzEsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJlemVkYXF1aUBnbWFpbC5jb20ifQ.F5dCJCBHiXtFcoAHaHrtPsK6udL8OdMxHB_GiGJUAAI27CydsJyBBfHErx3HRLanDQovTLidsefTWqxajTyi7Q"

// },
// })
//     const data = await resp.jason()

//     data.forEach((user) => {
//       const my_section = document.createElement("section");
//       my_section.innerHTML = `
//       <h2>${user.d}</h2>
//       <h2>${user.v}</h2>
//       <hr>
//       `;
//       root.append(my_section);
//     });
// };

// DOMContentLoaded para que el DOM se cargue luego que el HTML, sino queryselector no encuentra ID o class HTML
document.addEventListener("DOMContentLoaded", function() {
  let cotizacion = document.querySelector("#cotizacion");

  fetch("https://api.estadisticasbcra.com/usd_of", {
      headers: {
          Authorization: "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTA3MDUyNzEsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJlemVkYXF1aUBnbWFpbC5jb20ifQ.F5dCJCBHiXtFcoAHaHrtPsK6udL8OdMxHB_GiGJUAAI27CydsJyBBfHErx3HRLanDQovTLidsefTWqxajTyi7Q"
      },
  })
  .then((res) => res.json())
  .then((data) => {
      console.log(data);

      // Obtener el último elemento del array data
      const lastEntry = data[data.length - 1];
      
      // Crear y agregar el contenido correspondiente al último elemento
      const content = document.createElement("div");
      content.innerHTML = `
          <h2>${lastEntry.d}</h2>
          <h2>${lastEntry.v}</h2>
          <hr>
      `;
      cotizacion.append(content);
  })
  .catch((error) => {
      console.error("Error fetching data:", error);
  });
});