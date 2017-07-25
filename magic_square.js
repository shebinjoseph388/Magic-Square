var size = prompt('Enter the dimension of the squre');
var currentRaw = prompt('Enter the currentRaw position');
var currentRaw = parseInt(currentRaw);
var currentColumn = prompt('Enter the currentColumn position');
var currentColumn = parseInt(currentColumn);
var cd = prompt("Enter the common difference for the magic series");
var cd = parseInt(cd);
var start = prompt("Enter the starting value for the magic series");
var start = parseInt(start);

if (parseInt(size) % 2 == 0 && parseInt(size) != 1) {
  alert("Please provide odd value as size");
} else {
  var magicSquareObj = {};

  magicSquareObj = createMagicSquare();

  console.log('Result');
  printMagicSquare(magicSquareObj);
}

function createMagicSquare() {
     magicSquareObj = initialize();

     for (let i = 1; i <= (size * size); i++) {
         magicSquareObj = place(start, magicSquareObj);
         start = start + cd;
         magicSquareObj = moveUp(magicSquareObj);
         magicSquareObj = moveRight(magicSquareObj);

         if( checkPositionFilled(magicSquareObj) == true) {
             magicSquareObj = moveLeft(magicSquareObj);
             magicSquareObj = moveDown(magicSquareObj);
             magicSquareObj = moveDown(magicSquareObj);
         }
     }

     return magicSquareObj;
}

function initialize() {
    var magicSquare = [];

    for (let i=0; i < (size * size); i++){
        magicSquare[i] = [];
    }

    magicSquare[currentRaw][currentColumn] = 1;

    return {
        "magicSquare" : magicSquare,
        "currentRaw" : currentRaw,
        "currentColumn" : currentColumn
     };
}

function moveUp(magicSquareObj) {
    if (magicSquareObj.currentRaw == 0) {
        magicSquareObj.currentRaw = size - 1;
    } else {
        magicSquareObj.currentRaw = (magicSquareObj.currentRaw) - 1;
    }
    return magicSquareObj;
}

function moveRight(magicSquareObj) {
    if (magicSquareObj.currentColumn == size - 1) {
       magicSquareObj.currentColumn = 0;
    } else {
        magicSquareObj.currentColumn = (magicSquareObj.currentColumn) + 1;
    }
    return magicSquareObj;

}

function moveLeft(magicSquareObj) {
    if (magicSquareObj.currentColumn == 0) {
       magicSquareObj.currentColumn = size - 1;
    } else {
        magicSquareObj.currentColumn = (magicSquareObj.currentColumn) - 1;
    }
    return magicSquareObj;

}

function checkPositionFilled(magicSquareObj) {
    let row = magicSquareObj.currentRaw;
    let column = magicSquareObj.currentColumn;
    if (magicSquareObj.magicSquare[row][column] != undefined) {
        return true;
    }
    return false;
}

function moveDown(magicSquareObj)
{
    let row = magicSquareObj.currentRaw + 1;

    if (row == size)
    {
        row = 0;
    }

    magicSquareObj.currentRaw  = row;

    return magicSquareObj;
}

function place(value, magicSquareObj) {
    magicSquareObj.magicSquare[magicSquareObj.currentRaw][magicSquareObj.currentColumn] = value;

    return magicSquareObj;

}

function printMagicSquare(magicSquareObj)
{
    for (let i = 0; i < size; i++)
    {
        console.log("[");
        for (let j = 0; j < size; j++)
       {
            console.log( magicSquareObj.magicSquare[i][j] + "  ");
       }

       console.log("]");
    }
}
