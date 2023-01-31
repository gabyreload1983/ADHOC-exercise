const lista_personas = [
  ["11111111", "Pedro", "Paez", 24],
  ["22222222", "Fito", "Garcia", 23],
  ["33333333", "Leo", "Peralta", 26],
  ["44444444", "Bruno", "Mac", 25],
  ["55555555", "Nico", "Zaoral", 27],
  ["44444444", "Bruno", "Mac", 25],
];

const ordenar = (lista_personas) => {
  // """ El metodo debe devolver una lista con las edades ordenadas de menor a mayor"""
  // # Completar
  // pass

  return lista_personas.map((p) => p[3]).sort((a, b) => a - b);
};

const convertir_a_diccionario = (lista_personas) => {
  // """ Hacer un diccionario que tenga como claves los “dni” y como valores tuplas con nombre, apellido y edad """
  // # Completar
  // pass

  return lista_personas.map((p) => ({ [p[0]]: [p[1], p[2], p[3]] }));
};

const devolver_edad = (lista_personas, dni) => {
  // """ Para la 'lista_personas' devuelve la edad de la persona que tenga el dni constinido.
  // Tip: intentar usar el método convertir_a_diccionario"""
  // # Completar
  // pass
  return lista_personas.find((p) => p[0] === dni)[3];
};

const eliminar_repetidos = (lista_personas) => {
  // """ El metodo debe devolver los elementos unicos """
  // # Completar
  // pass
  const stringArray = lista_personas.map(JSON.stringify);
  let uniqueStringArray = new Set(stringArray);
  return Array.from(uniqueStringArray, JSON.parse);
};

const separar_por_edad = (lista_personas) => {
  // """ Devolver dos listas
  // * lista 1: mayores de 25 (incluido)
  // * lista 2: menores de 25
  // """
  // # Completar
  // return [], []
  const mayores = [];
  const menores = [];

  lista_personas.forEach((persona) => {
    persona[3] >= 25 ? mayores.push(persona) : menores.push(persona);
  });

  return [mayores, menores];
};

const obtener_promedio = (lista) => {
  // """ Implementar obtener el promedio de la lista de números que se recibe.
  // Capturar con un try/except la excepción de dividir por cero"""
  // # Completar
  // pass
  if (!lista.length) return "No se puede dividir por 0";

  return lista.reduce((acc, val) => acc + val, 0) / lista.length;
};

const main = () => {
  // """ Este metodo no debe modificarse y es solo a fines de probar el codigo """
  console.log("Resultados:");
  console.log(" * Edades ordenadas: ", ordenar(lista_personas));
  console.log(
    " * Elementos como diccionario:",
    convertir_a_diccionario(lista_personas)
  );

  console.log(
    " * La edad para dni 55555555 es: ",
    devolver_edad(lista_personas, "55555555")
  );
  console.log(" * Elementos únicos: ", eliminar_repetidos(lista_personas));
  console.log(
    " * Los mayores de 25 son: ",
    separar_por_edad(lista_personas)[0]
  );
  console.log(
    " * Los menores de 25 son: ",
    separar_por_edad(lista_personas)[1]
  );
  console.log(
    " * El promedio de las edades es: ",
    obtener_promedio(ordenar(lista_personas))
  );
  console.log(" * El promedio de una lista vacía es: ", obtener_promedio([]));
};

main();
