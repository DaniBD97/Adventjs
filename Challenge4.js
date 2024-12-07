/*

¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

El árbol está compuesto de triángulos de caracteres especiales.
Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
El árbol siempre debe tener la misma longitud por cada lado.
Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.
Ejemplos:

const tree = createXmasTree(5, '*')
console.log(tree)

____*____
___***___
__*****__
_*******_
*********
____#____
____#____


const tree2 = createXmasTree(3, '+')
console.log(tree2)

__+__
_+++_
+++++
__#__
__#__


const tree3 = createXmasTree(6, '@')
console.log(tree3)

_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____

Asegúrate de utilizar saltos de línea \n al final de cada línea, excepto en la última.



*/



function createXmasTree(height, ornament) {
    const tree = [];

    //se construye las ramas del arbol
    for (let i = 0; i < height; i++) {
        //agregamos los guiones antes y despues del arbol
        const air = '_'.repeat(height - i - 1);
        //cuantos simbolos se deben colocar para formar el arbol
        const grass = ornament.repeat(2 * i + 1);

        //lo agregamos al array vacio
        tree.push(`${air}${grass}${air}`);
    }

    //agregamos los guiones y luego el simbolo del tronco, - 1 para que este centrado
    const wood = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
    tree.push(wood, wood);

    //agregamos los saltos de linea
    return tree.join('\n');
}


//Detalles de las formulas

//PARTE DE LA HIERBA O RAMAS DEL PINO

/**
 * Progresión impar:

- Esta fórmula genera una secuencia de números impares: 1, 3, 5, 7, 9, etc.
- Los números impares son ideales para crear un árbol simétrico y puntiagudo.



Crecimiento constante:

- En cada fila, el árbol crece en 2 unidades de ancho (una a cada lado).
- Esto crea un efecto de ensanchamiento gradual y uniforme.



Desglose de la fórmula:

- `2 * i`: Esta parte asegura que el ancho aumente en 2 unidades por fila.
- `+ 1`: Esto garantiza que incluso cuando i = 0 (primera fila), tengamos al menos un ornamento.



Ejemplo práctico:
Supongamos que tenemos un árbol de altura 5. Veamos cómo se aplica la fórmula:



Fila 0 (i = 0): 2 * 0 + 1 = 1 ornamento
Fila 1 (i = 1): 2 * 1 + 1 = 3 ornamentos
Fila 2 (i = 2): 2 * 2 + 1 = 5 ornamentos
Fila 3 (i = 3): 2 * 3 + 1 = 7 ornamentos
Fila 4 (i = 4): 2 * 4 + 1 = 9 ornamentos


Simetría:

- Esta fórmula asegura que cada fila tenga un número impar de ornamentos.
- Esto permite que haya un ornamento central en cada fila, manteniendo la simetría del árbol.
 * 
 * 
 */



//PARTE DEL TRONCO

/*

`'_'.repeat(height - 1)`:

- `'_'`: Este es el carácter que se usa para representar el espacio vacío alrededor del tronco.
- `repeat()`: Es un método de string en JavaScript que repite el carácter un número específico de veces.
- `height - 1`: Esto determina cuántas veces se repite el '_'.

- Se usa `height - 1` porque queremos que el tronco esté alineado con la base del árbol.
- Por ejemplo, si el árbol tiene una altura de 5, habrá 4 '_' a cada lado del tronco.






`'#'`:

- Este es el carácter que representa el tronco del árbol.
- Se coloca en el centro, entre los espacios vacíos.



`+ '_'.repeat(height - 1)`:

- Esta parte es idéntica a la primera, añadiendo la misma cantidad de '_' después del '#'.



Concatenación:

- Todas estas partes se concatenan para formar una sola string que representa una línea del tronco.


*/