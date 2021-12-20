const nestedObject = [
    ["Peter", "Paul", "Mary"],
    ["Tennis", "Swimming", "Football"],
]

function nestedArrayConverter(obj) {
    let objKey = obj[0];
    let objValue = obj[1];
    let mainObj = {};

    for (let i = 0; i < objValue.length; i++) {
        mainObj[objKey[i]] = objValue[i]
    };
    return mainObj
}

console.log(nestedArrayConverter(nestedObject));



///////////// grid


const grid = {
    rows: 5,
    columns: 4
};

const makeGameGrid = (obj) => {
    let newArray = [];
    for (let i = 0; i < obj.rows; i++) {
        newArray.push([])

        for (let j = 0; j < obj.columns; j++) {
            newArray[i].push(`r${i+1}c${j+1}`)
        }
    }
    return newArray
}

console.log(makeGameGrid(grid));



let num = 2021;
console.log(String(num).length)



///////////////////////////// about Grid and how to change them from Array to String and Make in  inside the one array.

let arrayGrid = [];
let finaleArrayGrid = [];


function gridMaker(rows, columns) {
    for (let r = 0; r < rows; r++) {
        arrayGrid.push([]);
        for (let c = 0; c < columns; c++) {
            arrayGrid[r].push(`${r+1}${c+1}`)
        }
    }
    let furbishedArray = arrayGrid.map(item => item.map((item, index) => item + (index + 1))).reduce((acc, curr) => acc + ',' + curr);
    finaleArrayGrid.push(furbishedArray)
    let finaleResult = Array(furbishedArray)[0].split(",")
    // Array(Number(finaleResult[finaleResult.length-1]) + Number(finaleResult[0]))
    return finaleResult
}

console.log(gridMaker(4, 3))
//console.log(finaleArrayGrid);



/////////////////// Count letter from a String

const sentence = 'you can do anything if you passionate about it,'
let letterCounter = [];


function letterFinder(sentence) {
    Array(sentence)[0].split("").forEach(item => { // to check word Split with space and to check just letter and count split without space.
        if (item.toLowerCase().includes(' ')) {
            letterCounter.push(1)
        }
    })
    return letterCounter.length+1
}

console.log(letterFinder(sentence));