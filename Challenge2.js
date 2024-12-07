/*

Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])

Solucion:

*/


function createFrame(names) {

    //Tomamos el largo del nombre mas largo
    const nombre = Math.max(...names.map(name => name.length));
    
    //creamos el marco de arriba y abajo, son 4 ya que tiene que tener
    //2 atras y 2 por delante del nombre
    const marco = '*'.repeat(nombre + 4);

    //recorremos con map cada nombre y con padEnd rellenamos los espacios necesarios
    const contenido = names.map(name => `* ${name.padEnd(nombre)} *`);
  
    //Junta la línea superior, los nombres enmarcados, y la línea inferior con saltos de línea.
    return [marco, ...contenido, marco].join('\n');
  }



  