/* 
Doble Filtro
Deben crear una función llamada doubleFilter que reciba como parámetro un arreglo de objetos, un continente, y un número de población. La función filtra el arreglo solo con los países que sean del continente pasado por parámetro, y además, los que su población sea mayor o igual a la del parámetro.o 

Code

*/

var paises = [
    {
      nombre: "argentina",
      continente: "sudamerica",
      poblacion: 40000000,
    },
    {
      nombre: "brasil",
      continente: "sudamerica",
      poblacion: 300000000,
    },
    {
      nombre: "venezuela",
      continente: "sudamerica",
      poblacion: 25000000,
    },
    {
      nombre: "chile",
      continente: "sudamerica",
      poblacion: 10000000,
    },
    {
      nombre: "australia",
      continente: "oceania",
      poblacion: 18000000,
    },
    {
      nombre: "nueva zelanda",
      continente: "oceania",
      poblacion: 8000000,
    },
    {
      nombre: "china",
      continente: "asia",
      poblacion: 1000000000,
    },
    {
      nombre: "tailandia",
      continente: "asia",
      poblacion: 32000000,
    },
    {
      nombre: "vietnam",
      continente: "asia",
      poblacion: 23000000,
    },
    {
      nombre: "españa",
      continente: "europa",
      poblacion: 29000000,
    },
    {
      nombre: "alemania",
      continente: "europa",
      poblacion: 33000000,
    },
    {
      nombre: "francia",
      continente: "europa",
      poblacion: 65000000,
    },
    {
      nombre: "portugal",
      continente: "europa",
      poblacion: 4000000,
    },
    {
      nombre: "grecia",
      continente: "europa",
      poblacion: 12000000,
    },
  ];
  
  function doubleFilter(arr, continent, population) {
    //creamos la funcion y le apsamos los aprametros
    let newArr = []; // declaramos la variable igualada a un arreglo vacio en donde vamos a ir pushiando el continente y la población
  
    for (let i = 0, l = arr.length; i < l; i++) {
      //recorremos nuestro arreglo con un for
  
      //con nuestro if estamos viendo si se cumplen nuestras condiciones que la poblacion sea mayor o igual al parametro que le estamos pasando
      if (
        arr[i]["continente"] == continent &&
        arr[i]["poblacion"] >= population
      ) {
        newArr.push(arr[i]); //utilizar el metodo .push() para pushiar lo que cumpla con la condiciones
      }
    }
    return newArr; //y por ultimo retornamos la variable que creamos en el segudno paso
  }
  doubleFilter(paises, "europa", 4000001);
  
  /* 
  Doble Filtro II
  Ahora deben refactorizar la función doubleFilter,
  que recibirá los mismos tres parámetros
  pero en vez de devolver un arreglo con los nombres de los países que cumplan con las condiciones,
  devolverá un objeto con una key ‘nombres’ 
  que tendrá como valor un arreglo con los nombres de los países
  y otra llamada ‘población total’ cuyo valor sea la suma de las poblaciones de los países filtrados.
  
  Ejemplo:
  
  doubleFilter(paises, ‘sudamerica’, 30000000) debe retornar {
  nombres: [‘argentina’, ‘brasil],
  poblacion total: 340000000
  } */
  
  function doubleFilter(arr, continent, population) {
    //creamos la funcion con su nombre
  
    let newArr = []; //declaramos variable igualada a un arreglo vacio
  
    let poblacionTotal = 0; //poblacion total la igualamos a 0 porque es un contador y necesitamos igualarlo a 0
  
    let l = arr.length; //en esta variable asignamos el lago del array, se puede evitar, si, pero genera buenas practicas poder tener todo por separado.
  
    for (let i = 0; i < l; i++) {
      //lo recorremos con nuestro for
  
      if (
        arr[i]["continente"] == continent &&
        arr[i]["poblacion"] >= population
      ) {
        newArr.push(arr[i]["nombre"]); // pusheando al nuevo arreglo los nombres de los paises de los continentes del parametro
  
        poblacionTotal += arr[i]["poblacion"]; // a nuestra variable valor le sumamos la población de los paises del continente del aprametro
      }
    }
  
    let newObj = { ["nombres"]: newArr, ["poblacion total"]: poblacionTotal }; //los keys y values
    //let newObj = {}
    //newObj["nombres"] = newArr;
    //newObj["poblacion total"] = poblacionTotal
    return newObj;
  }
  
  doubleFilter(paises, "europa", 4000001);
  
  /* Doble Filtro III
  Ahora, la función doubleFilter
  debe retornar un objeto
  que, además de tener las keys nombres y población total, 
  tenga una key mayor y una menor
  en la que guarde el nombre de los países con mayor y menor población
  respectivamente.
  
  
  
  Ejemplo:
  
  doubleFilter(paises, ‘sudamerica’, 30000000) debe retornar {
  nombres: [‘argentina’, ‘brasil],
  poblacion total: 340000000,
  mayor: ‘brasil’,
  menor: ‘argentina’
  }
   */
  function doubleFilter(arr, continent, population) {
      //declaramos todas las variables a utilizar
    let nombresArr = [];
    let poblacionTotal = 0;
    let max = 0;
    let min = 0;
    let mayor = "";
    let menor = "";
    let l = arr.length;
  
    for (let i = 0; i < l; i++) {
      if (
        arr[i]["continente"] === continent &&
        arr[i]["poblacion"] >= population
      ) {
  
        nombresArr.push(arr[i]["nombre"]);
        poblacionTotal += arr[i]["poblacion"];
  // hasta aca hacemos todo lo mismo que veniamos haciendo antes
  
        if (min === 0 || arr[i]["poblacion"] < min) { //el primer condicional lo que nos dice es que si nuestro minimo sea igual a 0 no encontro ningun valor todavia ; cuando encuentre un valor lo ocupara y lo usara de comparativo para encontrar el menor valor de ese arreglo ; en otras palabras se esta usando como indice de comparación 
          min = arr[i]["poblacion"]; //necesito tomar a min y max para obtener la comparacion y la información que necesitamos, que en este caso es el nombre
          menor = arr[i]["nombre"];
        }
  
        if (arr[i]["poblacion"] > max) { //tambien vamos a tomar el max como un indice de comparación pero en este caso buscamos el numero mas alto 
  
          max = arr[i]["poblacion"];//necesito tomar a min y max para obtener la comparacion y la información que necesitamos, que en este caso es el nombre
          mayor = arr[i]["nombre"];
        }
      }
    }
  
    return {
      ["nombres"]: nombresArr,
      ["poblacion total"]: poblacionTotal,
      ["mayor"]: mayor,
      ["menor"]: menor,
    };
    /*
      let newObj = {}
      newObj["nombres"] = nombresArr
      newObj["poblacion total"] = poblacionTotal
      newObj["mayor"] = mayor
      newObj["menor"] = menor
      return newObj
      */
  }
  doubleFilter(paises, "sudamerica", 30000000);
  